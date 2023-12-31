// 블루투포스
//### 자릿수합
// function solution(n, arr) {
//   //   let answer,
//   //     max = Number.MIN_SAFE_INTEGER;
//   //   for (let x of arr) {
//   //     let sum = 0,
//   //       tmp = x;
//   //     while (tmp) {
//   //       sum += tmp % 10;
//   //       tmp = Math.floor(tmp / 10);
//   //     }
//   //     if (sum > max) {
//   //       max = sum;
//   //       answer = x;
//   //     } else if (sum === max) {
//   //       if (x > answer) answer = x;
//   //     }
//   //   }
//   //   return answer;
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0;
//     let tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

// ### 뒤집은 소수
// 소수구하는공식
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// function solution(arr) {
//   // parseInt("100".split("").reverse().join(""))
//   //   let answer = [];
//   //   for (let x of arr) {
//   //     let res = 0;
//   //     while (x) {
//   //       let t = x % 10;
//   //       res = res * 10 + t;
//   //       x = parseInt(x / 10);
//   //     }
//   //     // if (isPrime(res)) answer.push(res);
//   //   }
//   //   return answer;
//   let answer = [];
//   for (let x of arr) {
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       //   x = parseInt(x / 10);
//     }
//     console.log(res, "res");
//   }
//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr), 253 / 10, parseInt(253 / 10));

// ## 멘토
// function solution(test) {
//   let answer = 0;
//   m = test.length;
//   n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// }

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
// console.log(solution(arr));

// 졸업선물

// function solution(m, product) {
//   //   let answer = 0;
//   //   let n = product.length;
//   //   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   //   for (let i = 0; i < n; i++) {
//   //     let money = m - (product[i][0] / 2 + product[i][1]);
//   //     let cnt = 1;
//   //     for (let j = 0; j < n; j++) {
//   //       if (j !== i && product[j][0] + product[j][1] > money) break;
//   //       if (j !== i && product[j][0] + product[j][1] <= money) {
//   //         money -= product[j][0] + product[j][1];
//   //         cnt++;
//   //       }
//   //     }
//   //     answer = Math.max(answer, cnt);
//   //   }
//   //   return answer;

//   let answer = 0;
//   let arr = [];
//   let n = product.length;
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   for (let i = 0; i < n; i++) {
//     let money = m - (product[i][0] / 2 + product[i][1]);
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         cnt++;
//         money -= product[j][0] + product[j][1];
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }

// let arr = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];
// console.log(solution(28, arr));

// ## K번째 큰 수
// function solution(n, k, card) {
//   //   let answer;
//   //   let tmp = new Set();
//   //   for (let i = 0; i < n; i++) {
//   //     for (let j = i + 1; j < n; j++) {
//   //       for (let k = j + 1; k < n; k++) {
//   //         tmp.add(card[i] + card[j] + card[k]);
//   //       }
//   //     }
//   //   }
//   //   let a = Array.from(tmp).sort((a, b) => b - a);
//   //   answer = a[k - 1];
//   //   return answer;
//   let answer;
//   let tmp = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         tmp.add(card[i] + card[j] + card[k]);
//       }
//     }
//   }
//   let a = Array.from(tmp).sort((a, b) => b - a);
//   answer = a;
//   return answer;
// }

// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));

// ##멘토링
// function solution(test) {
//   let answer = 0;
//   let tmp = [];
//   m = test.length;
//   n = test[0].length;

//   // 1번학생부터 n번학생까지.. (n번학생,n번학생) 해서 등수비교하는거임
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       // 테스트들어가기전 초기화
//       let cnt = 0;
//       console.log("i", i, j);
//       for (let k = 0; k < m; k++) {
//         let pi = 0;
//         let pj = 0;
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }

//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) {
//         tmp.push([i, j]);
//         answer++;
//       }
//     }
//   }
//   console.log("tmp", tmp);
//   return answer;
// }

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
// console.log(solution(arr));

// ## 졸업선물
// function solution(m, product) {
//   let answer = 0;
//   let n = product.length;

//   // 총비용으로 소트
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   // console.log("[r", product);
//   // 각각 할인받는 거 다 계산해보기
//   for (let i = 0; i < n; i++) {
//     let money = m - (product[i][0] / 2 + product[i][1]);
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       // 돈이 0이거나 0보다 작아지면 3원남았는데 못샀는데 계산하는거 멈춰주려고 조건검
//       if (j !== i && product[j][0] + product[j][1] > money) {
//         break;
//       }
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         money -= product[j][0] + product[j][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }
// let arr = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];
// console.log(solution(28, arr));

// 블루투포스 n번째 큰수
function solution(n, k, card) {
  let answer;
  let tmp = new Set();
  // 이게 조합임..
  //  굳이  n-2, n-1 로 안하는이유는 애초에 거짓이 미리 나옴 연산전에..,,,   n-2,n-1 해도됨
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // console.log("i", card[i], "j", card[j], "k", card[k]);
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  // set은 소트지원안해서 배열로만듬
  let a = Array.from(tmp).sort((a, b) => b - a);
  console.log("a", a);
  answer = a[k - 1];
  return answer;
}
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
