/* 1.	Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и
возвращает строку этих чисел в виде номера телефона.
Формат номера телефона должен соответствовать "(xxx) xxx-xxxx".*/
function createPhoneNum(numbers) {
    var firstCode = numbers.slice(0, 3).join("");
    var secondPart = numbers.slice(3, 6).join("");
    var thirdPart = numbers.slice(6).join("");
    return "(".concat(firstCode, ") ").concat(secondPart, "-").concat(thirdPart);
}
var phoneNumber = createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);
/*2.	Если перечислить все натуральные числа до 10, кратные 3 или 5, то получим 3, 5, 6 и 9.
Сумма этих чисел равна 23. Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5,
меньше переданного числа. Кроме того, если число отрицательное, верните 0.*/
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 3; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
console.log(Challenge.solution(15));
console.log(Challenge.solution(-1206));
/*3.	Дан целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно. */
function rotateArray(nums, k) {
    if (nums.length === 0) {
        return nums;
    }
    var n = nums.length;
    var rotations = k % n;
    for (var i = 0; i < rotations; i++) {
        var lastElement = nums.pop();
        if (lastElement !== undefined) {
            nums.unshift(lastElement);
        }
    }
    return nums;
}
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 10;
var rotatedArray = rotateArray(nums, k);
console.log(rotatedArray); //[5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray([1, 2, 3], -10));
/*4. Есть два отсортированных массива nums1 и nums2 размера m и n соответственно,
вернуть медиану двух отсортированных массивов.
Медиана число (два числа) находящееся в середине массива.*/
function findMedianSortedArrays(nums1, nums2) {
    var merged = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    var length = merged.length;
    var isEvenLength = length % 2 == 0;
    var median;
    if (isEvenLength) {
        var mid = length / 2;
        var median1_1 = merged[mid - 1];
        var median2_1 = merged[mid];
        median = (median1_1 + median2_1) / 2;
        return median;
    }
    else {
        var mid = Math.floor(length / 2);
        return merged[mid];
    }
}
var nums1 = [1, 12];
var nums2 = [2];
var median1 = findMedianSortedArrays(nums1, nums2);
console.log(median1);
var nums3 = [1, 2];
var nums4 = [3, 4];
var median2 = findMedianSortedArrays(nums3, nums4);
console.log(median2);
