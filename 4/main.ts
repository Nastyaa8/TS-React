/*2.Создать промис myPromise, который через 3 секунды генерирует случайное число. 
Результат выполнения промиса (сгенерированное число) вывести в консоль.*/

const myPromise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      resolve(randomNumber);
    }, 3000);
  });
  
  myPromise
    .then((result) => {
      console.log("Сгенерированное число:", result);
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error);
    });
    
/*3.Создать функцию, которая принимает параметр delay и возвращает 
промис myPromise (промис из предыдущей задачи). Сгенерируйте 3 
числа (т.е. необходимо вызвать функцию 3 раза) и только после того, 
как все промисы выполняться успешно, вывести числа в консоль. 
Использовать Promise.all. */


function generateRandomNumberWithDelay(delay: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        myPromise.then((randomNumber) => {
          resolve(randomNumber); 
        }).catch(reject); 
      }, delay); 
    });
  }
  

  const promises = [
    generateRandomNumberWithDelay(3000), 
    generateRandomNumberWithDelay(3000), 
    generateRandomNumberWithDelay(3000), 
  ];
  
 
  Promise.all(promises)
    .then((results) => {
      
      console.log('Сгенерированные числа:', results);
    })
    .catch((error) => {
      
      console.error('Ошибка при генерации чисел:', error);
    });
  

/*4.Что будет выведено в консоль и почему? Что возвращают методы then и catch?*/
let pr1 = new Promise((res, rej) => {
    rej ('ku')
    })
    pr1
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))



/*5.Создайте промис, который выполнился успешно, результат 
выполнения промиса число 21. Вызовите цепочку методов then. 
Первый вызов метода then выводит в консоль результат выполнения 
предыдущего промиса. Второй вызов метода then выводит в консоль 
результат выполнения предыдущего промиса умноженного на 2. В 
результате в консоль последовательно должны выводиться числа 21 и 42.*/


const myPromise1 = new Promise<number>((resolve, reject) => {
    resolve(21); 
  });
  
  
  myPromise1
    .then((result) => {
      console.log(result); 
      return result * 2; 
    })
    .then((result) => {
      console.log(result); 
    });
  

/*6.Предыдущую задачу реализуйте при помои синтаксиса async/await*/


const PromiseMy = new Promise<number>((resolve, reject) => {
    resolve(21); 
  });
  
  
  async function processPromise() {
    try {
      
      let result = await PromiseMy;
      console.log(result); 
      
      result = result * 2;
      console.log(result); 
    } catch (error) {
      console.error('Ошибка:', error); 
    }
  }
  
 
  processPromise();
  

 /*Что будет выведено в консоль и почему?*/
 //7.
let promise1 = new Promise((res, rej) => {
    res('Resolved promise 1')
    })
    promise1
    .then((res) => {
    console.log("Resolved promise -2")
    return "OK"
    })
    .then((res) => {
    console.log(res)
    })

    //8.
    let promise2 = new Promise((res, rej) => { 
      res('Resolved promise - 1') })
promise2
.then((res) => { 
    console.log(res) 
    return "OK" })
.then((res1) => { console.log(res1) })

 //9.
let promise3 = new Promise((res, rej) => {
    res('Resolved promise 1')
    })
    promise3
    .then((res) => {console.log(res)
    return res})
    .then((res1) => {
    console.log('Resolved promise - 2') })

    //10.
    let promise4 = new Promise((res, rej) => { 
      res('Resolved promise 1') })
promise4
.then((res) => {
console.log(res) 
return res })
.then((res1) => {
console.log(res1)
})

 //11.
let promise5= new Promise((res2, rej) => {
    res2('Resolved promise 1') })
   
    promise5
    .then((res2) => {
        console.log(res2)
        return undefined; // Или просто `return;`
    })
    .then((res1: undefined) => {
        console.log(res1)
    })

   //12.
    let pr2 = new Promise((res, rej) => { 
      rej('ku')
})
pr2
.then(() => console.log(1))
.catch(() => console.log(2))
.catch(() => console.log(3))
.then(() => console.log(4))
.then(() => console.log(5))