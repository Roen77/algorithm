// function solution(arr1, arr2) {
//   const answer = [];

//   // for (let i = 0; i < arr1.length; i++) {
//   //   const rows = [];
//   //   for (let j = 0; j < arr2[0].length; j++) {
//   //     let sum = 0;
//   //     for (let k = 0; k < arr1[i].length; k++) {
//   //       console.log("i", i, "k", k, "j", j, arr2[k][j]);
//   //       sum += arr1[i][k] * arr2[k][j];
//   //       console.log("sum", sum);
//   //     }
//   //     rows.push(sum);
//   //   }
//   //   answer.push(rows);
//   // }
//   for (let i = 0; i < arr1.length; i++) {
//     let list = [];
//     for (let j = 0; j < arr2[0].length; j++) {
//       let sum = 0;
//       for (let k = 0; k < arr1[i].length; k++) {
//         sum += arr1[i][k] * arr2[k][j];
//       }
//       list.push(sum);
//     }
//     answer.push(list);
//   }

//   return answer;
// }

// console.log(
//   solution(
//     [
//       [1, 4],
//       [3, 2],
//       [4, 1],
//     ],
//     [
//       [3, 3],
//       [3, 3],
//     ]
//   )
// );

// function solution(arr1, arr2) {
//   let answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let rows = [];
//     for (let j = 0; j < arr2[0].length; j++) {
//       let sum = 0;
//       for (let k = 0; k < arr1[i].length; k++) {
//         sum += arr1[i][k] * arr2[k][j];
//       }
//       rows.push(sum);
//     }
//     answer.push(rows);
//   }

//   return answer;
// }
// console.log(
//   solution(
//     [
//       [2, 3, 2],
//       [4, 2, 4],
//       [3, 1, 4],
//     ],
//     [
//       [5, 4, 3],
//       [2, 4, 1],
//       [3, 1, 1],
//     ]
//   )
// );

// 답은맞는데 효율이안좋음..
// function solution(board) {
//   let sum = 1;
//   let answer = Number.MAX_SAFE_INTEGER;
//   let tmp = 0;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   const lastX = board.length - 1;
//   const lastY = board[board.length - 1].length - 1;
//   function DFS(x, y) {
//     if (x === lastX && y === lastY) {
//       answer = Math.min(answer, sum);
//       tmp = sum;
//       return;
//     } else {
//       for (let k = 0; k < dx.length; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];
//         if (
//           nx >= 0 &&
//           nx <= lastX &&
//           ny >= 0 &&
//           ny <= lastY &&
//           board[nx][ny] === 1
//         ) {
//           board[nx][ny] = 0;
//           sum += 1;
//           DFS(nx, ny);
//           board[nx][ny] = 1;
//           sum -= 1;
//         }
//       }
//     }
//   }

//   board[0][0] = 1;
//   DFS(0, 0);
//   console.log("tmp??", tmp, answer);
//   return !!tmp ? answer : -1;
// }
// 게임 맵 최단거리

// function solution(boards) {
//   let answer = -1;
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];
//   const queue = [{ x: 0, y: 0, tried: 1 }];
//   const lastX = boards.length - 1;
//   const lastY = boards[0].length - 1;

//   while (queue.length) {
//     const { x, y, tried } = queue.shift();

//     for (let k = 0; k < 4; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (x === lastX && y === lastY) {
//         console.log("andjy?", tried);
//         answer = tried;
//         return;
//       }

//       if (
//         nx >= 0 &&
//         nx <= lastX &&
//         ny >= 0 &&
//         ny <= lastY &&
//         boards[nx][ny] === 1
//       ) {
//         boards[nx][ny] = 0;

//         queue.push({
//           x: nx,
//           y: ny,
//           tried: tried + 1,
//         });
//       }
//     }
//   }
//   return answer;
//   // let answer = -1;
//   // const dx = [-1, 0, 1, 0];
//   // const dy = [0, 1, 0, -1];
//   // const stack = [{ x: 0, y: 0, tried: 1 }];
//   // const maxRow = boards.length;
//   // const maxColumn = boards[0].length;

//   // while (stack.length) {
//   //   const { x, y, tried } = stack.shift();

//   //   for (let i = 0; i < 4; i++) {
//   //     const nx = x + dx[i];
//   //     const ny = y + dy[i];

//   //     if (x === maxRow - 1 && y === maxColumn - 1) {
//   //       answer = tried;
//   //       return answer;
//   //     }

//   //     if (
//   //       nx >= 0 &&
//   //       nx < maxRow &&
//   //       y >= 0 &&
//   //       y < maxColumn &&
//   //       boards[nx][ny] === 1
//   //     ) {
//   //       boards[nx][ny] = 0;
//   //       stack.push({
//   //         x: nx,
//   //         y: ny,
//   //         tried: tried + 1,
//   //       });
//   //     }
//   //   }
//   // }

//   // return answer;
// }

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );

// 섹션 10
//돌다리
// function solution(n) {
//   let dy = Array.from({ length: n + 1 }, () => 0);
//   dy[0] = 1;
//   dy[1] = 2;
//   for (let i = 2; i <= n; i++) {
//     dy[i] = dy[i - 1] + dy[i - 2];
//   }
//   console.log("dy", dy);
//   return dy[n];
// }
// console.log(solution(7));
