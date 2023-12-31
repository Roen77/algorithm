// 문자열 탐색
// 회문 문자열
// function solution(s) {
//   //   let answer = "YES";
//   //   s = s.toLowerCase();
//   //   let len = s.length;
//   //   for (let i = 0; i < Math.floor(len / 2); i++) {
//   //     if (s[i] != s[len - i - 1]) return "NO";
//   //   }
//   //   return answer;

//   let answer = "Yes";
//   s = s.toLowerCase();
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     if (s[i] !== s[s.length - i - 1]) return "no";
//   }
//   return "yes";
// }

// let str = "goooG";
// console.log(solution(str));

//  ## 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// function solution(s) {
//   //   let answer = "YES";
//   //   s = s.toLowerCase().replace(/[^a-z]/g, "");
//   //   if (s.split("").reverse().join("") !== s) return "NO";
//   //   return answer;

//   let answer = "yes";
//   s = s.toLowerCase().replace(/[^a-z]/g, "");
//   if (s.split("").reverse().join("") !== s) return "no";
//   return answer;
// }

// let str = "found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));

// ### 숫자만 추출
// function solution(str) {
//   // let answer="";
//   // for(let x of str){
//   //     if(!isNaN(x)) answer+=x;
//   // }
//   // return parseInt(answer);
//   //   const num = str
//   //     .split("")
//   //     .filter((v) => !isNaN(v))
//   //     .join("");
//   //   return parseInt(num);
//   //   parseint든 Number쓰든 0208문자열은 숫자인 208로 바꿔줌
//   let answer = "";
//   for (let x of str) {
//     if (!isNaN(x)) answer += x;
//   }
//   console.log(typeof answer);
//   return parseInt(answer);
// }

// let str = "g0en2T0s8eSoft";
// console.log(solution(str));

// ## 가장짧은 문자거리
// 포인터??
// function solution(s, t) {
//   //   let answer = [];
//   //   let p = 1000;
//   //   for (let x of s) {
//   //     if (x === t) {
//   //       p = 0;
//   //       answer.push(p);
//   //     } else {
//   //       p++;
//   //       answer.push(p);
//   //     }
//   //   }
//   //   p = 1000;
//   //   for (let i = s.length - 1; i >= 0; i--) {
//   //     if (s[i] === t) p = 0;
//   //     else {
//   //       p++;
//   //       answer[i] = Math.min(answer[i], p);
//   //     }
//   //   }
//   //   return answer;
//   let answer = [];
//   let p = 1000;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
//   return answer;
// }

// let str = "teachermode";
// console.log(solution(str, "e"));

// ##문자열 압축
// function solution(s) {
//   //   let answer = "";
//   //   let cnt = 1;
//   //   s = s + " ";
//   //   for (let i = 0; i < s.length - 1; i++) {
//   //     if (s[i] === s[i + 1]) cnt++;
//   //     else {
//   //       answer += s[i];
//   //       if (cnt > 1) answer += String(cnt);
//   //       cnt = 1;
//   //     }
//   //   }
//   //   return answer;
//   let answer = "";
//   let cnt = 1;
//   //   초기값 대박.. 왜냐햐면 끝에 E는 비교할대상이 없음..
//   s = s + "";
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       cnt++;
//     } else {
//       answer += s[i];
//       if (cnt > 1) answer += String(cnt);
//       cnt = 1;
//     }
//   }
//   return answer;
// }

// let str = "KKHSSSSSSSE";
// console.log(solution(str));

// 유효한팰린드롬
function solution(s) {
  // let answer = "YES";
  // s = s.toLowerCase().replace(/[^a-z]/g, "");
  // if (s.split("").reverse().join("") !== s) return "NO";
  // return answer;
  let answer = "Yes";
  // ^는 아닌것들.. 소문자가 아닌것들을 모조리찾아서 없애중
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "no";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
