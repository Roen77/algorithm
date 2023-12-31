// 음계
// function solution(numbers) {
//   let answer = "mixed";
//   const copyNumbers = Array.from({ length: 8 }, (_, i) => i + 1);
//   if (numbers.reverse().join("") === copyNumbers.reverse().join("")) {
//     return "descending";
//   } else if (numbers.join("") === copyNumbers.join("")) {
//     return "ascending";
//   }
//   return answer;
// }

// function solution(numbers) {
//   let ascending = true;
//   let descending = true;
//   for (let i = 1; i <= 7; i++) {
//     if (numbers[i] > numbers[i - 1]) {
//       descending = false;
//     } else if (numbers[i] < numbers[i - 1]) {
//       ascending = false;
//     }
//   }
//   if (ascending) {
//     return "ascending";
//   } else if (descending) {
//     return "descending";
//   } else return "mixed";
// }

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const numbers = [8, 7, 6, 5, 4, 3, 2, 1];
// console.log(JSON.stringify(numbers) === JSON.stringify(numbers), "string");
// console.log(solution(numbers));

// 블랙잭
// 5 21
// 5 6 7 8 9

// let numbers = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295];
// function solution(numbers, sum) {
//   let answer = 0;
//   let max = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       for (let k = j + 1; k < numbers.length; k++) {
//         if (numbers[i] + numbers[j] + numbers[k] <= sum) {
//           if (max < numbers[i] + numbers[j] + numbers[k]) {
//             console.log("max", max, numbers[i], numbers[j], numbers[k]);
//             max = numbers[i] + numbers[j] + numbers[k];
//           }
//         }
//       }
//     }
//   }

//   console.log("max", max);

//   return answer;
// }

// console.log(solution(numbers, 500));

// const numbers = [4, 3, 6, 8, 7, 5, 2, 1];
// const numbers = [1, 2, 5, 3, 4];
// function solution() {
//   let answer = "NO";
//   let count = 1;
//   let stack = [];
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     while (count <= numbers[i]) {
//       stack.push(count);
//       count += 1;
//       result.push("+");
//     }

//     if (stack.at(-1) === numbers[i]) {
//       stack.pop();
//       result.push("-");
//     } else {
//       return "NO";
//     }
//   }
//   return result;
// }

// console.log(solution(), "andjt");

function solution() {
  let arr = [2, 1, 4, 3];
  const queue = arr.map((v, i) => [v, i]);
  console.log(queue);
  count = 0;
  console.log(
    queue.find((v, i) => v[0] > queue[i][0]),
    "??"
  );
}

console.log(solution());
