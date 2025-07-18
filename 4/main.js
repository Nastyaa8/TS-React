/*2.Создать промис myPromise, который через 3 секунды генерирует случайное число.
Результат выполнения промиса (сгенерированное число) вывести в консоль.*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var randomNumber = Math.floor(Math.random() * 10); //встроенная функция 
        resolve(randomNumber);
    }, 3000);
});
myPromise
    .then(function (result) {
    console.log("Сгенерированное число:", result);
})
    .catch(function (error) {
    console.error("Произошла ошибка:", error);
});
/*3.Создать функцию, которая принимает параметр delay и возвращает
промис myPromise (промис из предыдущей задачи). Сгенерируйте 3
числа (т.е. необходимо вызвать функцию 3 раза) и только после того,
как все промисы выполняться успешно, вывести числа в консоль.
Использовать Promise.all. */
function generateRandomNumberWithDelay(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            myPromise.then(function (randomNumber) {
                resolve(randomNumber);
            }).catch(reject);
        }, delay);
    });
}
var promises = [
    generateRandomNumberWithDelay(3000),
    generateRandomNumberWithDelay(3000),
    generateRandomNumberWithDelay(3000),
];
Promise.all(promises)
    .then(function (results) {
    console.log('Сгенерированные числа:', results);
})
    .catch(function (error) {
    console.error('Ошибка при генерации чисел:', error);
});
/*4.Что будет выведено в консоль и почему? Что возвращают методы then и catch?*/
var pr1 = new Promise(function (res, rej) {
    rej('ku');
});
pr1
    .then(function () { return console.log(1); })
    .catch(function () { return console.log(2); })
    .catch(function () { return console.log(3); })
    .then(function () { return console.log(4); })
    .then(function () { return console.log(5); });
/*5.Создайте промис, который выполнился успешно, результат
выполнения промиса число 21. Вызовите цепочку методов then.
Первый вызов метода then выводит в консоль результат выполнения
предыдущего промиса. Второй вызов метода then выводит в консоль
результат выполнения предыдущего промиса умноженного на 2. В
результате в консоль последовательно должны выводиться числа 21 и 42.*/
var myPromise1 = new Promise(function (resolve, reject) {
    resolve(21);
});
myPromise1
    .then(function (result) {
    console.log(result);
    return result * 2;
})
    .then(function (result) {
    console.log(result);
});
/*6.Предыдущую задачу реализуйте при помои синтаксиса async/await*/
var PromiseMy = new Promise(function (resolve, reject) {
    resolve(21);
});
function processPromise() {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, PromiseMy];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    result = result * 2;
                    console.log(result);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Ошибка:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
processPromise();
/*Что будет выведено в консоль и почему?*/
//7.
var promise1 = new Promise(function (res, rej) {
    res('Resolved promise 1');
});
promise1
    .then(function (res) {
    console.log("Resolved promise -2");
    return "OK";
})
    .then(function (res) {
    console.log(res);
});
//8.
var promise2 = new Promise(function (res, rej) {
    res('Resolved promise - 1');
});
promise2
    .then(function (res) {
    console.log(res);
    return "OK";
})
    .then(function (res1) { console.log(res1); });
//9.
var promise3 = new Promise(function (res, rej) {
    res('Resolved promise 1');
});
promise3
    .then(function (res) {
    console.log(res);
    return res;
})
    .then(function (res1) {
    console.log('Resolved promise - 2');
});
//10.
var promise4 = new Promise(function (res, rej) {
    res('Resolved promise 1');
});
promise4
    .then(function (res) {
    console.log(res);
    return res;
})
    .then(function (res1) {
    console.log(res1);
});
//11.
var promise5 = new Promise(function (res2, rej) {
    res2('Resolved promise 1');
});
promise5
    .then(function (res2) {
    console.log(res2);
    return undefined; // Или просто `return;`
})
    .then(function (res1) {
    console.log(res1);
});
//12.
var pr2 = new Promise(function (res, rej) {
    rej('ku');
});
pr2
    .then(function () { return console.log(1); })
    .catch(function () { return console.log(2); })
    .catch(function () { return console.log(3); })
    .then(function () { return console.log(4); })
    .then(function () { return console.log(5); });
