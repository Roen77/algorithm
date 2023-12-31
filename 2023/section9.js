// 인접행렬
// function solution(n, arr) {
//   let answer = 0;
//   let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   path = [];
//   for (let [a, b] of arr) {
//     graph[a][b] = 1;
//   }
//   function DFS(v) {
//     if (v === n) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (graph[v][i] === 1 && ch[i] === 0) {
//           // 들어가기전
//           ch[i] = 1;
//           path.push(i);
//           DFS(i);
//           //   빽하기전
//           ch[i] = 0;
//           path.pop();
//         }
//       }
//     }
//   }
//   path.push(1);
//   //   체크미리 1도해줘야함
//   ch[1] = 1;
//   DFS(1);
//   return answer;
// }
// let arr = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5],
// ];
// console.log(solution(5, arr));

// 인접리스트
// function solution(n, arr) {
//   let answer = 0;
//   let graph = Array.from(Array(n + 1), () => Array());
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   let path = [];
//   for (let [a, b] of arr) {
//     graph[a].push(b);
//   }
//   function DFS(v) {
//     if (v === n) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let i = 0; i < graph[v].length; i++) {
//         if (ch[graph[v][i]] === 0) {
//           ch[graph[v][i]] = 1;
//           path.push(graph[v][i]);
//           DFS(graph[v][i]);
//           ch[graph[v][i]] = 0;
//           path.pop();
//         }
//       }
//     }
//   }

//   ch[1] = 1;
//   path.push(1);
//   DFS(1);
//   return answer;
// }

// let arr = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 1],
//   [2, 3],
//   [2, 5],
//   [3, 4],
//   [4, 2],
//   [4, 5],
// ];
// console.log(solution(5, arr));

// 미로탐색
// function solution(board) {
//   let answer = 0;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   function DFS(x, y) {
//     if (x === 6 && y === 6) {
//       answer++;
//     } else {
//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];

//         // 경계선처리
//         if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
//           // 왓던길 체크
//           board[nx][ny] = 1;
//           DFS(nx, ny);
//           //   백
//           board[nx][ny] = 0;
//         }
//       }
//     }
//   }
//   board[0][0] = 1;
//   DFS(0, 0);
//   return answer;
// }
// let arr = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];

// console.log(solution(arr));

// 이진트리 넓이우선탐색
// function solution() {
//   let answer = "";
//   let queue = [];
//   queue.push(1);
//   while (queue.length) {
//     let v = queue.shift();
//     answer += v + " ";
//     for (let nv of [v * 2, v * 2 + 1]) {
//       // 건너띄기
//       if (nv > 7) continue;
//       queue.push(nv);
//     }
//   }
//   //   return answer;
//   //   while (queue.length) {
//   //     console.log(queue);
//   //     let v = queue.shift();
//   //     answer += v + " ";
//   //     for (let nv of [v * 2, v * 2 + 1]) {
//   //       if (nv > 7) continue;
//   //       queue.push(nv);
//   //     }
//   //   }
//   return answer;
// }

// console.log(solution());

// 송아지
// function solution(s, e) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let dis = Array.from({ length: 10001 }, () => 0);
//   let queue = [];

//   ch[s] = 1;
//   queue.push(s);
//   dis[s] = 0;
//   while (queue.length) {
//     let x = queue.shift();
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }

//   return answer;
// }

// console.log(solution(5, 14));

// 섬
// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   //   왼쪽부터 시계방향으로 돈것
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1, -1, -1, -1];
//   function DFS(x, y) {
//     // 바다로바꿔버림
//     board[x][y] = 0;
//     for (let k = 0; k < 8; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//         DFS(nx, ny);
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         answer++;
// console.log(i, j);
//         DFS(i, j);
// console.log("DFS END")
//       }
//     }
//   }

//   return answer;
// }

function solution(board) {
  let answer = 0;
  let n = board.length;
  //   왼쪽부터 시계방향으로 돈것
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // console.log(i, j);
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let [x, y] = queue.shift();
          console.log("x", x, "y", y);
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        console.log("BFS END");
      }
    }
  }
  return answer;
}
let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
