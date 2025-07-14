/* 1.	Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и 
возвращает строку этих чисел в виде номера телефона.  
Формат номера телефона должен соответствовать "(xxx) xxx-xxxx".*/

function createPhoneNum(numbers: number[]): string {
    const firstCode = numbers.slice(0, 3).join("");
    const secondPart = numbers.slice(3, 6).join("");
    const thirdPart = numbers.slice(6).join("");
  
    return `(${firstCode}) ${secondPart}-${thirdPart}`;
}

const phoneNumber: string = createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber); 

/*2.	Если перечислить все натуральные числа до 10, кратные 3 или 5, то получим 3, 5, 6 и 9. 
Сумма этих чисел равна 23. Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5, 
меньше переданного числа. Кроме того, если число отрицательное, верните 0.*/

class Challenge {
    static solution(number: number): number {
      if (number < 0) {
        return 0;
      }
  
      let sum = 0;
      for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
      }
  
      return sum;
    }
}
console.log(Challenge.solution(10)); 
console.log(Challenge.solution(15)); 
console.log(Challenge.solution(-1206)); 


/*3.	Дан целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно. */

function rotateArray(nums: number[], k: number): number[] {
 
        if (nums.length === 0) {
            return nums; 
        }

        const n = nums.length;
        const rotations = k % n; 

        for (let i = 0; i < rotations; i++) {
            const lastElement: number | undefined = nums.pop();
            if (lastElement !== undefined) {
                nums.unshift(lastElement);
            }
        }

        return nums;
     }



const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 10;
const rotatedArray = rotateArray(nums, k); 
console.log(rotatedArray); //[5, 6, 7, 1, 2, 3, 4]


console.log(rotateArray([1, 2, 3], -10)); 

/*4. Есть два отсортированных массива nums1 и nums2 размера m и n соответственно, 
вернуть медиану двух отсортированных массивов. 
Медиана число (два числа) находящееся в середине массива.*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const length = merged.length;
  const isEvenLength = length % 2 == 0;
  let median;

  if (isEvenLength) {
    const mid = length / 2;
    const median1 = merged[mid - 1];
    const median2 = merged[mid];
    median = (median1 + median2)/2;
    return median;
  } else {
    const mid = Math.floor(length / 2);
    return merged[mid];
  }
}

const nums1 = [1, 12];
const nums2 = [2];
const median1 = findMedianSortedArrays(nums1, nums2);
console.log(median1);

const nums3 = [1, 2];
const nums4 = [3, 4];
const median2 = findMedianSortedArrays(nums3, nums4);
console.log(median2);