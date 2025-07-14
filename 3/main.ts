/*Реализуйте систему пользователей, в которой есть три типа:
1.	гость — может только просматривать контент.
2.	пользователь — может оставлять комментарии.
3.	Admin — может удалять комментарии и управлять пользователями.
Требования:
•	Создайте абстрактный класс BaseUser с полями id, name и методом getRole(): string.
•	Создайте классы Guest, User, Admin, наследуемые от BaseUser.
•	Реализуйте метод getPermissions(), который возвращает список доступных действий для каждой роли.
*/
abstract class BaseUser {
    id: number;
    name: string;
    abstract getRole(): string;
    abstract getPermissions(): string[];

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    } 
  }
  //Гость
  class Guest extends BaseUser {
    constructor(id: number, name: string) {
      super(id, name);
    }
  
    getRole(): string {
      return "Guest";
    }
  
    getPermissions(): string[] {
      return ["Просмотр контента"];
    }
  }
  
  
  class User extends BaseUser {
    constructor(id: number, name: string) {
      super(id, name);
    }
  
    getRole(): string {
      return "User";
    }
  
    getPermissions(): string[] {
      return ["Просмотр контента", "Добавление комментариев"];
    }
  }
  
  
  class Admin extends BaseUser {
    constructor(id: number, name: string) {
      super(id, name);
    }
  
    getRole(): string {
      return "Admin";
    }
  
    getPermissions(): string[] {
      return [
        "Просмотр контента",
        "Добавление комментариев",
        "Удаление комментариев",
        "Управление пользователями",
      ];
    }
  }
  
 
  const guest = new Guest(1, "Аноним");
  console.log(guest.getRole()); // Guest
  console.log(guest.getPermissions()); // ["Просмотр контента"]
  
  const admin = new Admin(3, "Мария");
  console.log(admin.getRole()); // Admin
  console.log(admin.getPermissions());
  // ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"]
  
    /*2. Реализуйте систему отчетов, где:
•	У каждого отчета (Report) есть title, content и метод generate().
•	Есть два типа отчетов:
o	HTMLReport (возвращает HTML-код)
o	JSONReport (возвращает JSON-объект)
•	Используйте интерфейс IReport.
*/
 
interface IReport {
    title: string;
    content: string;
    generate(): string | object; 
  }
  

  class HTMLReport implements IReport {
    title: string;
    content: string;
  
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }
  
    generate(): string {
      return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
  }
  

  class JSONReport implements IReport {
    title: string;
    content: string;
  
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }
  
    generate(): object {
      return { title: this.title, content: this.content };
    }
  }
  
 
  const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
  console.log(report1.generate()); // <h1>Отчет 1</h1><p>Содержание отчета</p>
  
  const report2 = new JSONReport("Отчет 2", "Содержание отчета");
  console.log(report2.generate()); // { title: "Отчет 2", content: "Содержание отчета" }
  
/*Задача 3: Обобщенный кеш данных
Создайте класс Cache<T>, который позволяет хранить данные в кеше на определенное время.
Требования:
•	add(key: string, value: T, ttl: number) — добавляет элемент с временем жизни ttl (в мс).
•	get(key: string): T | null — возвращает значение или null, если время истекло.
•	clearExpired() — очищает просроченные элементы.
*/
  class MyCache<T> {
    private cache: { [key: string]: { value: T; expiry: number } } = {};

    add(key: string, value: T, ttl: number): void {
        const expiry = Date.now() + ttl;
        this.cache[key] = { value: value, expiry: expiry };
    }

    get(key: string): T | null {
        this.clearExpired(); 
        if (this.cache[key]) {
            return this.cache[key].value;
        }
        return null;
    }

    clearExpired(): void {
        const now = Date.now();
        for (const key in this.cache) {
            if (this.cache.hasOwnProperty(key) && this.cache[key].expiry <= now) {
                delete this.cache[key];
            }
        }
    }
}

const cache = new MyCache<number>(); 

cache.add("price", 100, 5000);

console.log(cache.get("price"));

setTimeout(() => console.log(cache.get("price")), 6000);
/*4.Создайте функцию 
createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T, 
которая принимает конструктор класса и аргументы, а затем создает новый объект.*/
class Product {
    constructor(public name: string, public price: number) {}
  }
  
  function createInstance<T>(
    cls: new (...args: any[]) => T,
    ...args: any[]
  ): T {
    return new cls(...args);
  }
  
  const p = createInstance(Product, "Телефон", 50000);
  console.log(p); // Product { name: "Телефон", price: 50000 }

/*Задача 5: Логирование событий с кортежами
Создайте систему логирования, где каждое событие представляется кортежем [timestamp, level, message].
Требования:
•	timestamp — дата в формате Date.
•	level — enum LogLevel с уровнями (INFO, WARNING, ERROR).
•	message — строка.
•	Реализуйте функцию logEvent(event: LogEntry), которая принимает кортеж и выводит его в консоль.
*/
 
enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
  }
  
  type LogEntry = [Date, LogLevel, string];
  
 
  function logEvent(event: LogEntry): void {
    const [timestamp, level, message] = event;
    console.log(`[${timestamp.toISOString()}] [${level}]: ${message}`);
  }
  
  // Пример использования:
  logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
  // [2025-02-02T14:35:00.123Z] [INFO]: Система запущена

/*Задача 6: Тип безопасных API-ответов
Реализуйте enum HttpStatus с кодами 200, 400, 401, 500 и тип ApiResponse<T>, содержащий кортеж [status: HttpStatus, data: T | null, error?: string].
Требования:
•	success<T>(data: T): ApiResponse<T> — создает успешный ответ (200).
•	error(message: string, status: HttpStatus): ApiResponse<null> — создает ошибочный ответ.
*/
  enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500,
  }
  
  type ApiResponse<T> = [status: HttpStatus, data: T | null, error?: string];
  
  function success<T>(data: T): ApiResponse<T> {
    return [HttpStatus.OK, data];
  }
  
  function error(message: string, status: HttpStatus): ApiResponse<null> {
    return [status, null, message];
  }
  
  // Примеры использования
  const res1 = success({ user: "Андрей" });
  console.log(res1); // [200, { user: "Андрей" }]
  
  const res2 = error("Не найдено", HttpStatus.BAD_REQUEST);
  console.log(res2); // [400, null, "Не найдено"]