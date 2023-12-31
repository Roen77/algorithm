// 스택 큐

// function solution(a) {
//   //   let answer = "YES";
//   //   stack = [];
//   //   for (let x of s) {
//   //     if (x === "(") stack.push(x);
//   //     else {
//   //       if (stack.length === 0) return "NO";
//   //       stack.pop();
//   //     }
//   //   }
//   //   if (stack.length > 0) return "NO";
//   //   return answer;
//   let stack = [];
//   let answer = "yes";
//   for (let x of s) {
//     if (x === "(") stack.push(x);
//     else {
//       if (stack.length === 0) return "no";
//       stack.pop();
//     }
//   }
//   //   let stack = [];
//   //   for (let x of a) {
//   //     if (x === ")" && stack[stack.length - 1] === "(") {
//   //       stack.pop();
//   //     } else stack.push(x);
//   //   }
//   //   return stack.length === 0 ? "yes" : "no";
// }

// let a = "(()(()))(()";
// let a = "(())()";
// console.log(solution(a));

// 괄호문자제거
// function solution(s) {
//   //   let answer;
//   //   let stack = [];
//   //   for (let x of s) {
//   //     if (x === ")") {
//   //       while (stack.pop() !== "(");
//   //     } else stack.push(x);
//   //   }
//   //   answer = stack.join("");
//   //   return answer;
//   let stack = [];
//   for (let x of s) {
//     if (x === ")") {
//       while (stack.pop() !== "(");
//     } else stack.push(x);
//   }
//   return stack;
// }

// let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));

//### 크레인 인형뽑기(카카오 기출)
// function solution(board, moves) {
//   //   let answer = 0;
//   //   let stack = [];
//   //   moves.forEach((pos) => {
//   //     for (let i = 0; i < board.length; i++) {
//   //       if (board[i][pos - 1] !== 0) {
//   //         let tmp = board[i][pos - 1];
//   //         board[i][pos - 1] = 0;
//   //         if (tmp === stack[stack.length - 1]) {
//   //           stack.pop();
//   //           answer += 2;
//   //         } else stack.push(tmp);
//   //         break;
//   //       }
//   //     }
//   //   });
//   //   return answer;
//   let answer = 0;
//   let stack = [];
//   moves.forEach((pos) => {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][pos - 1] !== 0) {
//         let tmp = board[i][pos - 1];
//         board[i][pos - 1] = 0;
//         if (tmp === stack[stack.length - 1]) {
//           stack.pop();
//           answer += 2;
//         } else stack.push(tmp);
//         break;
//       }
//     }
//   });
//   return answer;
// }

// let a = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// let b = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b), "ddd");

// # 후위식 === 스택
// function solution(s) {
//   //   let answer;
//   //   let stack = [];
//   //   for (let x of s) {
//   //     // 숫자냐?
//   //     if (!isNaN(x)) stack.push(Number(x));
//   //     else {
//   //       let rt = stack.pop();
//   //       let lt = stack.pop();
//   //       if (x === "+") stack.push(lt + rt);
//   //       else if (x === "-") stack.push(lt - rt);
//   //       else if (x === "*") stack.push(lt * rt);
//   //       else if (x === "/") stack.push(lt / rt);
//   //     }
//   //   }
//   //   answer = stack[0];
//   //   return answer;
//   let stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) stack.push(Number(x));
//     else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === "+") stack.push(lt + rt);
//       else if (x === "-") stack.push(lt - rt);
//       else if (x === "*") stack.push(lt * rt);
//       else if (x === "/") stack.push(lt / rt);
//     }
//   }
//   console.log(stack);
// }

// let str = "352+*9-";
// console.log(solution(str));

// ### 쇠막대기
// function solution(s) {
//   //   let answer = 0;
//   //   let stack = [];
//   //   for (let i = 0; i < s.length; i++) {
//   //     if (s[i] === "(") stack.push("(");
//   //     else {
//   //       stack.pop();
//   //       if (s[i - 1] === "(") answer += stack.length;
//   //       else answer++;
//   //       //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
//   //     }
//   //   }
//   //   return answer;
//   let answer = 0;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push("(");
//     else {
//       // 레이져
//       stack.pop();
//       if (s[i - 1] === "(") answer += stack.length;
//       else answer++;
//     }
//   }
//   return answer;
// }

// let a = "(((()(()()))(())()))(()())";
// // (())

// console.log(solution(a));

// 공주 구하기
// function solution(n, k) {
//   //   let answer;
//   //   let queue = Array.from({ length: n }, (v, i) => i + 1);
//   //   while (queue.length) {
//   //     for (let i = 1; i < k; i++) queue.push(queue.shift());
//   //     queue.shift();
//   //     if (queue.length === 1) answer = queue.shift();
//   //   }
//   //   return answer;
//   //   let answer;
//   //   let queue = Array.from({ length: n }, (v, i) => i + 1);

//   //   while (queue.length) {
//   //     for (let i = 1; i < k; i++) queue.push(queue.shift());
//   //     queue.shift();
//   //     if (queue.length === 1) answer = queue.shift();
//   //   }
//   //   return answer;
//   let answer;
//   let queue = Array.from({ length: n }, (v, i) => i + 1);
//   while (queue.length) {
//     for (let i = 1; i < k; i++) queue.push(queue.shift());
//     queue.shift();
//     if (queue.length === 1) answer = queue.shift();
//   }
//   return answer;
// }

// console.log(solution(8, 3));

// function solution(a, b) {
//   //   let answer = "Yes";
//   //   let stack = a.split("");
//   //   for (let x of b) {
//   //     if (x === stack[0]) {
//   //       stack.shift();
//   //     }
//   //   }
//   //   return stack.length === 0 ? "yes" : "no";
//   //   let answer = "YES";
//   //   let queue = need.split("");
//   //   for (let x of plan) {
//   //     if (queue.includes(x)) {
//   //       if (x !== queue.shift()) return "NO";
//   //     }
//   //   }
//   //   if (queue.length > 0) return "NO";
//   //   return answer;
//   let answer = "Yes";
//   let queue = a.split("");
//   for (let x of b) {
//     if (queue.includes(x)) {
//       if (x !== queue.shift()) return "no";
//     }
//   }
//   if (queue.length > 0) return "no";
//   return answer;
// }
// let a = "CBA";
// let b = "CBDAGE";
// console.log(solution(a, b));

// 쇠막대기
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      // 먼저빼야 레이저 여는괄호 계산안함
      stack.pop();
      // 바로앞이 ( 이거면 레이저임
      if (s[i - 1] === "(") answer += stack.length;
      // 막대기의 끝
      else answer += 1;
    }
  }
  return answer;
}
let a = "()(((()())(())()))(())";
console.log(solution(a));
