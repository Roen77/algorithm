// function solution(m, coin) {
//   //   let answer = 1000;
//   //   function DFS(L, sum) {
//   //     // 이거안하면 맥시멈콜..오류남
//   //     if (sum > n) return;
//   //     // 최소라 가지치기 방지용
//   //     if (L >= answer) return;
//   //     if (sum === n) {
//   //       // 그리고 값이 여러개면 최소값을..
//   //       answer = Math.min(answer, L);
//   //       return;
//   //     } else {
//   //       for (let i = 0; i < arr.length; i++) {
//   //         DFS(L + 1, sum + arr[i]);
//   //       }
//   //     }
//   //   }
//   //   DFS(0, 0);
//   //   return answer;

// 다이나믹
//   let answer = 0;
//   let dy = Array.from({ length: m + 1 }, () => 1000);
//   dy[0] = 0;
//   for (let i = 0; i < coin.length; i++) {
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//   }
//   console.log(dy, "dy");
//   return dy[m];
// }

// let arr = [1, 2, 5];
// console.log(solution(15, arr));
// function solution(totalTime, ps, pt) {
//   //   let answer = Number.MIN_SAFE_INTEGER;
//   //   const n = ps.length;
//   //   function DFS(L, t, s) {
//   //     if (t > totalTime) return;
//   //     if (L === n) {
//   //       answer = Math.max(answer, s);
//   //     } else {
//   //       for (let i = 0; i < n; i++) {
//   //         DFS(L + 1, t + pt[i], s + ps[i]);
//   //         DFS(L + 1, t, s);
//   //       }
//   //     }
//   //   }
//   //   DFS(0, 0, 0);
//   let answer = 0;
//   return answer;
// }

// let ps = [10, 25, 15, 6, 7];
// let pt = [5, 12, 8, 3, 4];
// console.log(solution(20, ps, pt));

// function solution(m, arr) {
//   let answer = 0;
//   let dy = Array.from({ length: m + 1 }, () => 0);
//   for (let i = 0; i < arr.length; i++) {
//     let ps = arr[i][0];
//     let pt = arr[i][1];
//     for (let j = m; j >= pt; j--) {
//       dy[j] = Math.max(dy[j], dy[j - pt] + ps);
//     }
//   }

//   console.log("du", dy);
//   return (answer = dy[m]);
// }

// let arr = [
//   [10, 5],
//   [25, 12],
//   [15, 8],
//   [6, 3],
//   [7, 4],
// ];
// console.log(solution(20, arr));

function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
