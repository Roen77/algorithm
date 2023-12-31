// 계단오르기
// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 1 }, () => 0);
//   //   dy[1] = 1;
//   //   dy[2] = 2;
//   //   for (let i = 3; i <= n; i++) {
//   //     dy[i] = dy[i - 2] + dy[i - 1];
//   //   }
//   //   answer = dy[n];
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n];
//   console.log("dy", dy);
//   return answer;
// }

// console.log(solution(7));
// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 2 }, () => 0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n + 1; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n + 1];
//   return answer;
// }

// console.log(solution(7));
// 최대부분증가수열
// function solution(arr) {
//   let answer = 0;
//   let dy = Array.from({ length: arr.length }, () => 0);
//   dy[0] = 1;
//   for (let i = 1; i < arr.length; i++) {
//     let max = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] < arr[i] && dy[j] > max) {
//         max = dy[j];
//       }
//     }
//     dy[i] = max + 1;
//     answer = Math.max(answer, dy[i]);
//   }
//   return answer;
// }

// let arr = [5, 3, 7, 8, 6, 2, 9, 4];
// console.log(solution(arr));

// 동전교환 냅색
// function solution(m, coin) {
//   let answer = 0;
//   let dy = Array.from({ length: m + 1 }, () => 1000);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//   }
//   answer = dy[m];
//   return answer;
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));

function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  //   for (let i = 0; i < arr.length; i++) {
  //     let ps = arr[i][0];
  //     let pt = arr[i][1];
  //     for (let j = m; j >= pt; j--) {
  //       dy[j] = Math.max(dy[j], dy[j - pt] + ps);
  //     }
  //   }
  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
