var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Реализуйте систему пользователей, в которой есть три типа:
1.	гость — может только просматривать контент.
2.	пользователь — может оставлять комментарии.
3.	Admin — может удалять комментарии и управлять пользователями.
Требования:
•	Создайте абстрактный класс BaseUser с полями id, name и методом getRole(): string.
•	Создайте классы Guest, User, Admin, наследуемые от BaseUser.
•	Реализуйте метод getPermissions(), который возвращает список доступных действий для каждой роли.
*/
var BaseUser = /** @class */ (function () {
    function BaseUser(id, name) {
        this.id = id;
        this.name = name;
    }
    return BaseUser;
}());
//Гость
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest(id, name) {
        return _super.call(this, id, name) || this;
    }
    Guest.prototype.getRole = function () {
        return "Guest";
    };
    Guest.prototype.getPermissions = function () {
        return ["Просмотр контента"];
    };
    return Guest;
}(BaseUser));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name) {
        return _super.call(this, id, name) || this;
    }
    User.prototype.getRole = function () {
        return "User";
    };
    User.prototype.getPermissions = function () {
        return ["Просмотр контента", "Добавление комментариев"];
    };
    return User;
}(BaseUser));
// 
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name) {
        return _super.call(this, id, name) || this; //для инициализации
    }
    Admin.prototype.getRole = function () {
        return "Admin";
    };
    Admin.prototype.getPermissions = function () {
        return [
            "Просмотр контента",
            "Добавление комментариев",
            "Удаление комментариев",
            "Управление пользователями",
        ];
    };
    return Admin;
}(BaseUser));
var guest = new Guest(1, "Аноним");
console.log(guest.getRole()); // Guest
console.log(guest.getPermissions()); // ["Просмотр контента"]
var admin = new Admin(3, "Мария");
console.log(admin.getRole()); // Admin
console.log(admin.getPermissions());
var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.title = title;
        this.content = content;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p>");
    };
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.title = title;
        this.content = content;
    }
    JSONReport.prototype.generate = function () {
        return { title: this.title, content: this.content };
    };
    return JSONReport;
}());
var report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate()); // <h1>Отчет 1</h1><p>Содержание отчета</p>
var report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate()); // { title: "Отчет 2", content: "Содержание отчета" }
/*Задача 3: Обобщенный кеш данных
Создайте класс Cache<T>, который позволяет хранить данные в кеше на определенное время.
Требования:
•	add(key: string, value: T, ttl: number) — добавляет элемент с временем жизни ttl (в мс).
•	get(key: string): T | null — возвращает значение или null, если время истекло.
•	clearExpired() — очищает просроченные элементы.
*/
var MyCache = /** @class */ (function () {
    function MyCache() {
        this.cache = {};
    }
    MyCache.prototype.add = function (key, value, ttl) {
        var expiry = Date.now() + ttl;
        this.cache[key] = { value: value, expiry: expiry };
    };
    MyCache.prototype.get = function (key) {
        this.clearExpired();
        if (this.cache[key]) {
            return this.cache[key].value;
        }
        return null;
    };
    MyCache.prototype.clearExpired = function () {
        var now = Date.now();
        for (var key in this.cache) {
            if (this.cache.hasOwnProperty(key) && this.cache[key].expiry <= now) {
                delete this.cache[key];
            }
        }
    };
    return MyCache;
}());
var cache = new MyCache();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(function () { return console.log(cache.get("price")); }, 6000);
/*4.Создайте функцию
createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T,
которая принимает конструктор класса и аргументы, а затем создает новый объект.*/
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
function createInstance(cls) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (cls.bind.apply(cls, __spreadArray([void 0], args, false)))();
}
var p = createInstance(Product, "Телефон", 50000);
console.log(p); // Product { name: "Телефон", price: 50000 }
/*Задача 5: Логирование событий с кортежами
Создайте систему логирования, где каждое событие представляется кортежем [timestamp, level, message].
Требования:
•	timestamp — дата в формате Date.
•	level — enum LogLevel с уровнями (INFO, WARNING, ERROR).
•	message — строка.
•	Реализуйте функцию logEvent(event: LogEntry), которая принимает кортеж и выводит его в консоль.
*/
// Enum для уровней логирования
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
// Функция для логирования события
function logEvent(event) {
    var timestamp = event[0], level = event[1], message = event[2];
    console.log("[".concat(timestamp.toISOString(), "] [").concat(level, "]: ").concat(message));
}
// Пример использования:
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
// Пример вывода (зависит от текущего времени):
// [2024-12-02T14:35:00.123Z] [INFO]: Система запущена
/*Задача 6: Тип безопасных API-ответов
Реализуйте enum HttpStatus с кодами 200, 400, 401, 500 и тип ApiResponse<T>, содержащий кортеж [status: HttpStatus, data: T | null, error?: string].
Требования:
•	success<T>(data: T): ApiResponse<T> — создает успешный ответ (200).
•	error(message: string, status: HttpStatus): ApiResponse<null> — создает ошибочный ответ.
*/
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
// Примеры использования
var res1 = success({ user: "Андрей" });
console.log(res1); // [200, { user: "Андрей" }]
var res2 = error("Не найдено", HttpStatus.BAD_REQUEST);
console.log(res2); // [400, null, "Не найдено"]
