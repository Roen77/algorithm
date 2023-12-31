// 재귀 재귀는 스택을 사용함.. 원리를 알자
// 모든 함수는 스택에 저장됨 콜스택
// function solution(n) {
//   //   function DFS(L) {
//   //     if (L == 0) return;
//   //     else {
//   //       DFS(L - 1);
//   //       console.log(L);
//   //     }
//   //   }
//   //   DFS(n);
//   //   DFS 깊이 우선탐색 lavel의 L 가지로 뻗어나감 깊이있게
//   //   초보자는 if else
//   function DFS(L) {
//     if (L === 0) return;
//     else {
//       // 위에서는 3,2,1
//       console.log(L);
//       DFS(L - 1);
//       //   여기서는 1,2,3
//       //   console.log(L);
//     }
//   }
//   DFS(n);
// }

// solution(3);

// 재귀함수를 이용한 이진수 출력
// function solution(n) {
//   let answer;

//   function DFS(n) {
//     if (n === 0) {
//       return;
//     } else {
//       //   console.log(n % 2, "s");
//       DFS(parseInt(n / 2));
//       answer += String(n % 2);
//     }
//   }

//   DFS(n);

//   return answer;
// }
// console.log(solution(11));
// function solution(n) {
//   let answer = "";
//   function DFS(n) {
//     if (n === 0) return;
//     else {
//       DFS(parseInt(n / 2));
//       answer += String(n % 2);
//     }
//   }
//   DFS(n);
//   return answer;
// }

// console.log(solution(11));

// 이진트리
// function solution(v) {
//   let answer;
//   function DFS(v) {
//     if (v > 7) {
//       return;
//     } else {
//       // 전위순회
//       //   console.log(v);
//       // 왼쪽노드
//       DFS(v * 2);
//       //  중위 순회
//       //   console.log(v);
//       // 오른쪽
//       DFS(v * 2 + 1);
//       //   후위
//       console.log(v);
//     }
//   }

//   DFS(v);
//   return answer;
// }
// console.log(solution(1));

// 부분집합
// function solution(n) {
//   let answer = [];
//   //   n번까지 배열이있어야하기때문에..
//   let = ch = Array.from({ length: n + 1 }, () => 0);
//   function DFS(v) {
//     if (v === n + 1) {
//       let tmp = "";
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 1) tmp += i + " ";
//       }
//       console.log(tmp, "tmp");
//       if (tmp.length > 0) answer.push(tmp.trim());
//     } else {
//       // 포함시킨다
//       ch[v] = 1;
//       DFS(v + 1);
//       //   포함안시킨다
//       ch[v] = 0;
//       DFS(v + 1);
//     }
//   }
//   DFS(1);
//   return answer;
// }
// console.log(solution(3));

// 합이같은 부분집합
// function solution(arr) {
//   let answer = "NO";
//   let flag = 0;
//   let total = arr.reduce((a, b) => a + b, 0);
//   let n = arr.length;
//   function DFS(L, sum) {
//     // 답이 발견되었다면 그만..
//     if (flag) return;
//     if (L === n) {
//       if (total - sum === sum) {
//         answer = "Yes";
//         // console.log(sum);
//         // 답이발견되면 flag =1
//         flag = 1;
//       }
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// let arr = [1, 3, 5, 6, 7, 10];
// console.log(solution(arr));

// 바둑이
// 공집합이 꽁집합 모두 포함안한거 무조건 포함해서 -1 해주네..
// function solution(c, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (L === n) {
//       //   console.log(sum);
//       if (sum > c) return;
//       //   console.log(sum);
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }
// let arr = [81, 58, 42, 33, 61];
// console.log(solution(259, arr));

// 최대점수구하기
// 20분
// function solution(m, ps, pt) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = ps.length;
//   function DFS(L, sum, time) {
//     if (time > m) return;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + ps[L], time + pt[L]);
//       DFS(L + 1, sum, time);
//     }
//   }

//   DFS(0, 0, 0);
//   return answer;
// }
// // 점수
// let ps = [10, 25, 15, 6, 7];
// // 시간
// let pt = [5, 12, 8, 3, 4];
// console.log(solution(20, ps, pt));

// 중복순열
// function solution(n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 1; i <= n; i++) {
//         tmp[L] = i;
//         DFS(L + 1);
//       }
//     }
//   }

//   DFS(0);
//   return answer;
// }

// console.log(solution(3, 2));

// 동전교환
// function solution(m, arr) {
//   let answer = Number.MAX_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (sum > m) return;
//     // 가지치기
//     if (L >= answer) return;
//     if (sum === m) {
//       console.log(L, sum);
//       answer = Math.min(answer, L);
//     } else {
//       for (let i = 0; i < n; i++) {
//         DFS(L + 1, sum + arr[i]);
//       }
//     }
//   }

//   DFS(0, 0);

//   return answer;
// }
// let arr = [1, 2, 5];
// console.log(solution(15, arr));

// 순열 인데 중복순열이아님
// function solution(m, arr) {
//   let answer = [];
//   let n = arr.length;
//   let ch = Array.from({ length: n }, () => 0);
//   let tmp = Array.from({ length: m }, () => 0);

//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp[L] = arr[i];
//           DFS(L + 1);
//           ch[i] = 0;
//         }
//       }
//     }
//   }

//   DFS(0);

//   return answer;
// }

// let arr = [3, 6, 9];
// console.log(solution(2, arr));

// 팩토리얼
// function solution(n) {
//   let answer;
//   // function DFS(n){
//   //     if(n===1) return 1;
//   //     else return n*DFS(n-1);
//   // }
//   // answer=DFS(n);
//   function DFS(n) {
//     if (n === 1) {
//       return 1;
//     } else {
//       return n * DFS(n - 1);
//     }
//   }
//   answer = DFS(n);
//   return answer;
// }

// console.log(solution(5));

// 조합
// function solution(n, r) {
//   let answer = [];
//   //   메모이제이션
//   let dy = Array.from(Array(35), () => Array(35).fill(0));
//   //   console.log("dy", dy);

//   function DFS(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n === r || r === 0) {
//       return 1;
//     } else {
//       return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
//     }
//   }
//   answer = DFS(n, r);
//   return answer;
// }

// // console.log(solution(5, 3));
// console.log(solution(33, 19));

// 수열
// function solution(n, f) {
//   let answer,
//     flag = 0;
//   let dy = Array.from(Array(11), () => Array(11).fill(0));
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   //   let p = Array.from({ length: n }, () => 0);
//   let p = [];
//   let b = Array.from({ length: n }, () => 0);
//   function combi(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n === r || r === 0) return 1;
//     else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
//   }

//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n && sum === f) {
//       answer = p.slice();
//       flag = 1;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           //   p[L] = i;
//           p.push(i);
//           DFS(L + 1, sum + b[L] * p[L]);
//           ch[i] = 0;
//           p.pop();
//         }
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     b[i] = combi(n - 1, i);
//   }
//   DFS(0, 0);
//   return answer;
// }
// console.log(solution(4, 16));

// 조합
// function solution(n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L, s) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = s; s <= n; i++) {
//         tmp[L] = i;
//         DFS(L + 1, i + 1);
//       }
//     }
//   }
//   DFS(0, 1);
//   return answer;
// }

// console.log(solution(4, 2));

// 수의 조합
function solution(n, k, arr, m) {
  let answer = 0;
  let tmp = Array.from({ length: k });
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
      console.log(sum, tmp);
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
