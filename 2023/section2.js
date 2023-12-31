// 섹션2
// ### 큰 수 출력하기

// function solution(arr) {
//   //   let answer = [];
//   //   answer.push(arr[0]);
//   //   for (let i = 1; i < arr.length; i++) {
//   //     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
//   //   }
//   //   return answer;
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
//   }
//   return answer;
// }

// let arr = [7, 3, 9, 5, 6, 12];
// console.log(solution(arr));

// ### 보이는 학생
// function solution(arr) {
//   //   let answer = 1,
//   //     max = arr[0];
//   //   for (let i = 1; i < arr.length; i++) {
//   //     if (arr[i] > max) {
//   //       answer++;
//   //       max = arr[i];
//   //     }
//   //   }
//   //   return answer;
//   let answer = 1;
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       answer++;
//       max = arr[i];
//     }
//   }
//   return answer;
// }

// let arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));

// ### 가위바위보
// 가위 1 바위2 보 3
// function solution(a, b) {
//   //   let answer = "";
//   //   for (let i = 0; i < a.length; i++) {
//   //     if (a[i] === b[i]) answer += "D ";
//   //     else if (a[i] === 1 && b[i] === 3) answer += "A ";
//   //     else if (a[i] === 2 && b[i] === 1) answer += "A ";
//   //     else if (a[i] === 3 && b[i] === 2) answer += "A ";
//   //     else answer += "B ";
//   //   }
//   //   return answer;
//   let answer = "";
//   //  기준점 a가 이긴다
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) answer += "D";
//     else if (a[i] === 1 && b[i] === 3) answer += "A ";
//     else if (a[i] === 2 && b[i] === 1) answer += "A ";
//     else if (a[i] === 3 && b[i] === 2) answer += "A ";
//     else answer += "B ";
//   }
//   return answer;
// }

// let a = [2, 3, 3, 1, 3];
// let b = [1, 1, 2, 2, 3];
// console.log(solution(a, b));

// ### 점수계산
// function solution(arr) {
//   //   let answer = 0,
//   //     cnt = 0;
//   //   for (let x of arr) {
//   //     if (x === 1) {
//   //       cnt++;
//   //       answer += cnt;
//   //     } else cnt = 0;
//   //   }
//   //   return answer;
//   //   누적된걸 유지시키는 값이 answer고
//   // 값 초기화가 cnt
//   let answer = 0;
//   let cnt = 0;
//   for (let x of arr) {
//     if (x === 1) {
//       cnt++;
//       answer += cnt;
//     } else cnt = 0;
//   }
//   return answer;
// }
// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));

// ### 등수구하기
// function solution(arr) {
//   //   let n = arr.length;
//   //   let answer = Array.from({ length: n }, () => 1);
//   //   for (let i = 0; i < n; i++) {
//   //     for (let j = 0; j < n; j++) {
//   //       if (arr[j] > arr[i]) answer[i]++;
//   //     }
//   //   }
//   //   return answer;

//   let n = arr.length;
//   let answer = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }

// let arr = [87, 89, 92, 100, 76];
// console.log(solution(arr));

// ## 격자판 최대합
// 이중배열 돌릴때 처음에는 열 두번째가 행
// function solution(arr) {
//     let answer = Number.MIN_SAFE_INTEGER;
//     let n = arr.length;
//     let sum1 = (sum2 = 0);
//     for (let i = 0; i < n; i++) {
//       sum1 = sum2 = 0;
//       for (let j = 0; j < n; j++) {
//         // 행의 합
//         sum1 += arr[i][j];
//         //   열의합
//         sum2 += arr[j][i];
//       }
//       answer = Math.max(answer, sum1, sum2);
//     }
//     sum1 = sum2 = 0;
//     for (let i = 0; i < n; i++) {
//       // 왼쪽 대각선
//       sum1 += arr[i][i];
//       // 오른쪽 대각선
//       sum2 += arr[i][n - i - 1];
//     }
//     answer = Math.max(answer, sum1, sum2);
//     return answer;
// }

// let arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];
// console.log(solution(arr));

// 봉우리
// xy값 사용
// function solution(arr) {
//   let answer = 0;
//   let n = arr.length;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let flag = 1;
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];
//         if (
//           nx >= 0 &&
//           nx < n &&
//           ny >= 0 &&
//           ny < n &&
//           arr[nx][ny] >= arr[i][j]
//         ) {
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   let answer = 0;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let flag = 1;
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];
//         if (
//           nx >= 0 &&
//           ny >= 0 &&
//           nx < arr.length &&
//           ny < arr.length &&
//           arr[nx][ny] >= arr[i][j]
//         ) {
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }

function solution(arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        // 행
        let nx = i + dx[k];
        // 열
        let ny = j + dy[k];
        // 테두리는 무조건 나보다낮으니 제외한다.. 0인것들 outofindex 오류막기위해..
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
