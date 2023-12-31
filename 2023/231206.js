// 선택 정렬  빅오표기범할때 상수는 생략

// function solution(arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) {
//         idx = j;
//       }
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }

//   return arr;
// }
// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr), "dd");

// function solution(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr), "qjqmf");

// function solution(arr) {
//   let minusArr = [];
//   let plutArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) minusArr.push(arr[i]);
//     else plutArr.push(arr[i]);
//   }
//   return [...minusArr, ...plutArr];
//   //   return arr.filter((v) => v < 0).concat(arr.filter((v) => v > 0));
// }

// 버블정렬
// function solution(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }
//   return arr;
// }
// const arr = [1, 2, 3, -3, -2, 5, 6, -6];
// let test = [1, 2, 3];
// console.log(solution(arr), "ddss");

// 삽입
// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i];
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > tmp) {
//         arr[j + 1] = arr[j];
//       } else break;
//     }
//     arr[j + 1] = tmp;
//   }
//   return arr;
// }

// 선택
// function solution(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) {
//         idx = j;
//       }
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }
//   return arr;
// }

// function solution(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }
//   return arr;
// }

// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i];
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > tmp) {
//         arr[j + 1] = arr[j];
//       } else break;
//     }

//     arr[j + 1] = tmp;
//   }
//   return arr;
// }
// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr), "버블");

// function solution(arr) {
//   let answer = arr;
//   //   arr.sort((a, b) => {
//   //     if (a[0] === b[0]) return a[1] - b[1];
//   //     else return a[0] - b[0];
//   //   });
//   arr.sort((a, b) => {
//     if (a[0] === b[0]) return a[1] - b[1];
//     else return a[0] - b[0];
//   });
//   return answer;
// }

// let arr = [
//   [2, 7],
//   [1, 3],
//   [1, 2],
//   [2, 5],
//   [3, 6],
// ];
// console.log(solution(arr), "ㅂ");

// 1. ab ba 비교
// function solution(numbers) {
//   let answer_list = [];
//   for (let number of numbers) answer_list.push(number.toString());
//   // 내림차순
//   answer_list.sort(function (a, b) {
//     return b + a - (a + b);
//   });
//   console.log(answer_list, "aa");

//   return answer_list.join("")[0] == "0" ? "0" : answer_list.join("");
// }

//2. 사전식 정렬을 만들어라
// function solution(numbers) {
//   let answer = "";
//   let temp = [];

//   // why? 4 [12, 1213] 과 같은 예제를 위해서.../ 그런데 1213이 입력으로 들어오면 안되는거 아닌가?
//   // 본래 길이도 저장 해둔다.
//   for (let i = 0; i < numbers.length; i++)
//     temp.push([numbers[i].toString().length, numbers[i].toString().repeat(4)]);
//   console.log("tmp", temp);

//   // 4자리까지만 비교한다.
//   temp.sort(function (a, b) {
//     return b[1].substr(0, 4) - a[1].substr(0, 4); // 내림차순 정렬
//   });
//   // 3030, 3434
//   //   console.log("tmp", typeof temp[2][1].substr(0, 4));

//   for (let ele of temp) {
//     answer += ele[1].substr(0, ele[0]);
//   }

//   return answer[0] == "0" ? "0" : answer;
// }

// function solution(numbers) {
//     let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
//     return answer[0] === '0' ? '0' : answer;
// }
// function solution(numbers) {
//   var answer = numbers
//     .map((v) => v + "")
//     .sort((a, b) => (b + a) * 1 - (a + b) * 1)
//     .join("");
//   console.log("sol", answer);
//   return answer[0] === "0" ? "0" : answer;
// }

function solution(numbers) {
  let answer = numbers.map((v) => v + "");
  console.log("a", answer);
  answer.sort((a, b) => b + a - (a + b));

  return answer.join("")[0] === "0" ? "0" : answer;
}

// const arr = [6, 10, 2];
const arr = [3, 30, 34, 5, 9];
console.log(solution(arr), "??", "123" - "100");
