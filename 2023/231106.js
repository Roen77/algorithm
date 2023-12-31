// 주식가격

// 안나옴답이..이렇게풀면아되나봄 기존에는 너무 많이돔..
// function solution(prices) {
//   var answer = [];
//   let tmp = 0;
//   for (let i = 0; i < prices.length; i++) {
//     tmp = 0;
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] <= prices[j]) {
//         tmp++;
//       }
//     }
//     answer.push(tmp);
//   }
//   return answer;
// }
//이렇게 햇더니통과
// function solution(prices) {
//   var answer = [];
//   let tmp = 0;
//   for (let i = 0; i < prices.length; i++) {
//     tmp = 0;
//     for (let j = i + 1; j < prices.length; j++) {
//       tmp++;
//       if (prices[i] > prices[j]) {
//         break;
//       }
//     }
//     answer.push(tmp);
//   }
//   return answer;
// }

// function solution(prices) {
//   const stack = [],
//     result = Array(prices.length)
//       .fill(0)
//       .map((_, idx) => idx)
//       .reverse();
//   const visited = [];

//   prices.forEach((price, idx) => {
//     const sLastIdx = stack.length - 1;

//     // 자신보다 뒤에 있는 숫자 중에서 작아지면 처리
//     if (price < stack[sLastIdx]) {
//       let backTrackingIdx = 0;

//       // 이전 값이 크다면
//       while (price < stack[sLastIdx - backTrackingIdx]) {
//         // 처음 접근한 값이라면 값을 적용
//         if (!visited[sLastIdx - backTrackingIdx]) {
//           console.log(
//             "price:",
//             price,
//             " prices.length - 1 - idx",
//             prices.length - 1 - idx
//             // "결과",
//             // (result[sLastIdx - backTrackingIdx] -= prices.length - 1 - idx)
//           );
//           result[sLastIdx - backTrackingIdx] -= prices.length - 1 - idx;
//           console.log(
//             "price:",
//             price,
//             " 게산후 result[sLastIdx - backTrackingIdx] ",
//             result[sLastIdx - backTrackingIdx]
//           );

//           visited[sLastIdx - backTrackingIdx] = true;
//         }
//         backTrackingIdx++;
//       }
//     }
//     stack.push(price);
//   });
//   return result;
// }

// 6;
// 7;
// 8;
// 9;
// 10;
// 11;
// 12;
// 13;
// 14;
// 15;
// 16;
// 17;
// 18;
// 19;
// 20;
// 21;
// function solution(prices) {
//   const answer = new Array(prices.length).fill(0);
//   const stack = [];
//   let length = prices.length;

//   for (let i = 0; i < length; i++) {
//     while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
//       console.log("i", i, "stack", stack);
//       let temp = stack.pop();
//       console.log("i", i, "stack", stack);

//       answer[temp] = i - temp;
//     }
//     stack.push(i);
//   }

//   while (stack.length) {
//     let temp = stack.pop();
//     answer[temp] = length - temp - 1;
//   }

//   return answer;
// }
// const prices = [1, 2, 3, 2, 3];
// // [4, 3, 1, 1, 0]
// console.log(solution(prices));

// n^2 배열 자르기
function solution(n, left, right) {
  //   const answer = [];
  //   for (let i = left; i <= right; i++) {
  //     const divide = Math.floor(i / n);
  //     console.log("divide", divide);
  //     const rest = i % n;
  //     console.log("rest", rest);
  //     if (divide >= rest) {
  //       answer.push(divide + 1);
  //     } else {
  //       answer.push(rest + 1);
  //     }
  //   }
  const answer = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    if (row >= col) {
      answer.push(row + 1);
    } else answer.push(col + 1);
  }
  return answer;
}

// 이 문제를 해결하려면 left~right까지의 값에 해당하는 인덱스를 찾으시면 됩니다 첫 행은 left/n+1이고 첫 열은 left%n+1이 되니 해당 행에서 나올 배열을 그때그때 만들어서 해당 열의 값을 찾아주시면 모든 행과 열을 다 만들지 않아도 문제를 풀 수 있습니다
// [3,2,2,3]

//  [0][2]
// [1][0]
// [1][1]
// [1][2]

// [1,2,3]
// [2,2,3]
// [3,3,3]
console.log(solution(3, 2, 5));
