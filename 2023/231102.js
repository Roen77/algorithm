// 1. 이진트리

// function solution(num) {
//   let answer = "";
//   function DFS(num) {
//     if (num === 0) {
//       return;
//     } else {
//       DFS(parseInt(num / 2));
//       answer += String(num % 2);
//     }
//   }
//   DFS(num);
//   return answer;
// }

// console.log(solution(11));
// 앞으로간건 다음꺼 실행
//빠꾸면 되돌아온것
// function solution(n) {
//   let answer = "";
//   function DFS(m) {
//     if (m > 7) {
//       return;
//     } else {
//       //   console.log("m:", m);
//       DFS(2 * m);
//       console.log("m:", m);
//       DFS(2 * m + 1);
//     }
//   }
//   DFS(n);
// }
// console.log(solution(1));
// 2. 순열
// function solution(r, arr) {
//   let answer = [];
//   const n = arr.length;
//   const ch = Array.from({ length: n }, () => 0);
//   const tmp = Array.from({ length: r }, () => 0);
//   function DFS(L) {
//     if (L === r) {
//       answer.push(tmp.slice());
//       return;
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp[L] = arr[i];
//           // 체크하고 가지뻗기
//           DFS(L + 1);
//           //   가지다뻗고 롤백할때 체크풀어주기
//           ch[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }
// 3. 중복순열
// function solution(n, arr) {
//   let answer = [];
//   let tmp = Array.from({ length: n }, () => 0);
//   function DFS(L) {
//     if (L === n) {
//       console.log("ㅁ웟");
//       answer.push(tmp.slice());
//       return;
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         tmp[L] = arr[i];
//         DFS(L + 1);
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

// let arr = [3, 6, 9];
// console.log(solution(2, arr));
// 4.팩토리얼
// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if (n === 1) return 1;
//     else {
//       return n * DFS(n - 1);
//     }
//   }
//   return (answer = DFS(n));
// }
// console.log(solution(5));
// 5. 조합
// function solution(n, r) {
//   let answer;
//   //   메모이제이션
//   let dy = Array.from(Array(35), () => Array(35).fill(0));
//   function DFS(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n == r || r == 0) {
//       return 1;
//     } else {
//       return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
//     }
//   }

//   return (answer = DFS(n, r));
// }

// console.log(solution(33, 19));
// function solution(n, f) {
//   let answer;
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   let p = Array.from({ length: n }, () => 0);
//   let b = Array.from({ length: n }, () => 0);
//   // 조합을 메모이제이션
//   const dy = Array.from(Array(11), () => Array(11).fill(0));
//   let flag = 0;
//   function combi(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n === r || r === 0) {
//       return 1;
//     } else {
//       return (dy[n][r] = combi(n - 1, r) + combi(n - 1, r - 1));
//     }
//   }

//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n && sum === f) {
//       answer = p.slice();
//       flag = 1;
//       return;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           p[L] = i;
//           DFS(L + 1, sum + p[L] * b[L]);
//           ch[i] = 0;
//         }
//       }
//     }
//   }

//   //   콤비 구하기
//   for (let i = 0; i < n; i++) {
//     b[i] = combi(n - 1, i);
//   }
//   DFS(0, 0);
//   return answer;
// }
// console.log(solution(4, 16));

// 이분검색
// 필요하면 정렬
//  mid가 값이되고 값이될수있는 최소가 lt 값이될수있는 최대가 rt
// function solution(n, arr) {
//   let answer;
//   // 이분검색은 정렬부터
//   arr.sort((a, b) => a - b);
//   let lt = 0;
//   let rt = arr.length - 1;
//   while (lt <= rt) {
//     const mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === n) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > n) {
//       rt = mid - 1;
//     } else lt = mid + 1;
//   }

//   return answer;
// }
// let arr = [23, 87, 65, 12, 57, 32, 99, 81];
// console.log(solution(32, arr));
// 뮤비
// function count(songs, capacity) {
//   let cnt = 1;
//   let sum = 0;
//   for (let i = 0; i < songs.length; i++) {
//     if (sum + songs[i] > capacity) {
//       cnt++;
//       sum = songs[i];
//     } else sum += songs[i];
//   }
//   return cnt;
// }
// function solution(n, arr) {
//   let answer = 0;
//   //   가질수있는값의 최솟값임 왜냐하면 3개가 정해져있고 무조건 다넣어야하는데 최소 가장큰 시간이 걸린 노래는 들어갸아쟈ㅣ...
//   let lt = Math.max(...arr);
//   let rt = arr.reduce((a, b) => a + b, 0);
//   while (lt <= rt) {
//     const mid = parseInt((lt + rt) / 2);
//     if (count(arr, mid) <= n) {
//       answer = mid;
//       rt = mid - 1;
//     } else lt = mid + 1;
//   }

//   return answer;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));
// 마구간

// function count(stable, dist) {
//   let cnt = 1;
//   let ep = stable[0];
//   for (let i = 0; i < stable.length; i++) {
//     if (stable[i] - ep >= dist) {
//       cnt++;
//       ep = stable[i];
//     }
//   }

//   return cnt;
// }
// function solution(c, stable) {
//   let answer;
//   stable.sort((a, b) => a - b);
//   let lt = 1;
//   let rt = stable.length - 1;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(stable, mid) >= c) {
//       answer = mid;
//       lt = mid + 1;
//     } else rt = mid - 1;
//   }
//   return answer;
// }
// let arr = [1, 2, 8, 4, 9];
// console.log(solution(3, arr));

// function solution(m, arr) {
//   let answer = 0;
//   let lt = 0;
//   let sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     // 앞으로가면서누적시킴
//     sum += arr[rt];
//     if (sum === m) answer++;
//     // 뒤에뺌..
//     while (sum >= m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }

//   return answer;
// }
// let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

// 연속부분수열2
// function solution(n, arr) {
//   let answer = 0;
//   let lt = 0;
//   let sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     while (sum > n) {
//       sum -= arr[lt++];
//     }
//     answer += rt - lt + 1;
//   }

//   return answer;
// }
// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));
// BFS 3가지 셋팅하고 queue가 없을때까지 반복함
// function solution(s, e) {
//   let answer = 0;
//   //   왓다갓다안하게하려고 체크배열만듬
//   const ch = Array.from({ length: 10001 }, () => 0);
//   //   거리좌표를 다셋팅해줌..
//   const dis = Array.from({ length: 10001 }, () => 0);
//   //  나의 위치를 계산해야해서 그 위치를 queue에 넣을거임
//   const queue = [];

//   //  초기셋
//   ch[s] = 1;
//   dis[s] = 0;
//   queue.push(s);

//   while (queue.length) {
//     let x = queue.shift();
//     for (let nx of [x + 1, x - 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       else if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }

//   return answer;
// }

// function solution(s, e) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let dis = Array.from({ length: 10001 }, () => 0);
//   let queue = [];

//   queue.push(s);
//   dis[s] = 0;
//   ch[s] = 1;
//   while (queue.length) {
//     let x = queue.shift();
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       else if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }
//   return answer;
// }
// console.log(solution(8, 3));

// function solution(arr) {
//   let answer = 0;
//   let queue = [];
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1 - 1 - 1];
//   let n = arr.length;
//   //   위치구하려면 이중배열은 두번돌릴수밖에없음
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i][j] === 1) {
//         // 섬이다!
//         arr[i][j] = 0;
//         queue.push([i, j]);
//         answer++;
//         while (queue.length) {
//           let [x, y] = queue.shift();
//           //   대각선 전부다 돌기
//           for (let k = 0; k < dx.length; k++) {
//             let nx = x + dx[k];
//             let ny = y + dy[k];
//             if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
//               arr[nx][ny] = 0;
//               queue.push([nx, ny]);
//             }
//           }
//         }
//         // answer++;
//       }
//     }
//   }

//   return answer;
// }

// function solution(arr) {
//   let answer = 0;
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1 - 1 - 1];
//   let n = arr.length;

//   function DFS(x, y) {
//     arr[x][y] = 0;
//     for (let k = 0; k < dx.length; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (nx >= 0 && ny >= 0 && nx < n && ny < n && arr[nx][ny] === 1) {
//         DFS(nx, ny);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i][j] === 1) {
//         arr[i][j] = 0;
//         answer++;
//         DFS(i, j);
//       }
//     }
//   }

//   return answer;
// }
// let arr = [
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 1, 0, 1, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 1, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0],
// ];

// console.log(solution(arr), "?sdf?");
