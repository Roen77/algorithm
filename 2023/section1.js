// 섹션 1
// #### 세 수중 최솟값
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.
// ▣ 입력예제 1 6 5 11
// ▣ 출력예제 1 5

//내가
// function solution(...res) {
//   return Math.min(...res);
// }

// 답
// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;
//   return answer;
// }

// ### 삼각형 판별
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1 6 7 11
// ▣ 출력예제 1 YES
// ▣ 입력예제 1 13 33 17
// ▣ 출력예제 1 NO

// 내가
// function solution(...res) {
//   //   const max = Math.max(...res);
//   //   const rest = res.filter((v) => v !== max);
//   //   if (res[0] + res[1] > max) return "Yes";
//   //   else return "no";

//   const max = Math.max(...res);
//   const sum = res.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   console.log(sum, "s 63이 나와야함");
//   if (sum - max <= max) return "No";
//   return "yes";
// }

//삼각형되려면 tot - max <= max

// 답
// function solution(a, b, c) {
//   let answer = "YES",
//     max;
//   let tot = a + b + c;
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if (tot - max <= max) answer = "NO";
//   return answer;
// }

// function solution(a, b, c) {
//   let answer = "yes",
//     max;
//   //sum
//   const sum = [a, b, c].reduce((acc, cur) => acc + cur, 0);
//   //max
//   if (a < b) max = b;
//   else max = a;
//   if (c > max) max = c;

//   if (sum - max <= max) answer = "no";
//   return answer;
// }

// console.log(solution(6, 7, 11));
// console.log(solution(13, 33, 17));

// ### 연필갯수
// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 필요한 다스 수를 출력합니다.
// function solution(n) {
//   let answer;
//   answer = Math.ceil(n / 12);
//   return answer;
// }

// function solution(n) {
//   let answer;
//   answer = Math.ceil(n / 12);
//   //무조건 올림 4 => 4 4.1부터 4.9까지 5 floor는 정반대
//   return answer;
// }

// console.log(solution(178));

// ### 1부터 N까지 합 출력하기
// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     answer = answer + i;
//   }

//   return answer;
// }

// function solution(n) {
//   //1. reduce
//   let answer = 0;
//   //   answer = Array.from({ length: n }).reduce((acc, cur, i) => acc + (i + 1), 0);
//   //   answer = Array.from({ length: n }, (v, i) => i + 1).reduce(
//   //     (acc, cur, i) => acc + cur,
//   //     0
//   //   );
//   for (let i = 1; i <= n; i++) {
//     answer += i;
//   }
//   //   for (let i = 1; i <= n; i++) {
//   //     answer = answer + i;
//   //   }
//   //   console.log(Array.from({ length: 10 }), "undefined가 10개인 배열");
//   //   console.log(
//   //     Array.from({ length: 10 }, (v, i) => i),
//   //     "[0,1,2,3,4,5,6,7,8,9]"
//   //   );
//   return answer;
// }

// console.log(solution(10));

// ### 최솟값
//  7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// function solution(arr) {
//   let answer,
//     min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }
//최솟값은 최대로 초기값설정
// function solution(arr) {
//   let answer;
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i > arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

// ### 홀수

// 내가 정답
// function solution(arr) {
//   // 홀수만 추출
//   const odd = arr.filter((v) => v % 2 === 1);
//   //   홀수의 합
//   const sum = odd.reduce((acc, cur) => acc + cur, 0);
//   //   홀수 중 최소
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < odd.length; i++) {
//     if (odd[i] < min) min = odd[i];
//   }
//   return `${sum}\n${min}`;
// }

//답
/// function solution(arr){
//     let answer=[];
//     let sum=0, min=1000;
//     for(let x of arr){
//         if(x%2===1){
//             sum+=x;
//             if(x<min) min=x;
//         }
//     }
//     answer.push(sum);
//     answer.push(min);
//     return answer;
// }

// function solution(arr) {
//   let answer = [];
//   let sum = 0;
//   let min = Number.MAX_SAFE_INTEGER;
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] % 2 === 1) {
//   //       sum += arr[i];
//   //       if (arr[i] < min) min = arr[i];
//   //     }
//   //   }
//   //   answer.push(sum);
//   //   answer.push(min);
//   //   return answer;
//   for (let x of arr) {
//     if (x % 2 === 1) {
//       sum += x;
//       if (x < min) min = x;
//     }
//   }
//   return `${sum}\n${min}`;
// }

// arr = [12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));

// ### 7. 10부제

//내가
// function solution(day, arr) {
//   const cars = arr.filter((v) => v % 10 === day);
//   return cars.length;
// }

// const day = 3;
// const arr = [25, 23, 11, 47, 53, 17, 33];

// console.log(solution(day, arr));

// function solution(day, arr) {
//   let answer = 0;
//   for (let x of arr) {
//     if (x % 10 === day) answer++;
//   }
//   return answer;
//   //   let answer = 0;
//   //   for (let x of arr) {
//   //     if (x % 10 == day) answer++;
//   //   }

//   //   return answer;
// }

// arr = [25, 23, 11, 47, 53, 17, 33];
// console.log(solution(3, arr));

// ### 8. 일곱난장이

// function solution(arr) {
//   let answer = arr;
//   let sum = answer.reduce((a, b) => a + b, 0);
//   let flag = 0;
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (sum - (answer[i] + answer[j]) == 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//         flag = 1;
//         break;
//       }
//     }
//     if (flag == 1) break;
//   }
//   return answer;
// }

// function solution(arr) {
//   let answer = arr;
//   let sum = answer.reduce((acc, cur) => acc + cur, 0);
//   let flag = 0;
//   //   배열의 앞뒤 비교하려고
//   //8번돔
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       //   console.log(arr[i], arr[j], "??");
//       if (sum - (answer[i] + answer[j]) === 100) {
//         answer.splice(i, 1);
//         console.log("au", answer);
//       }
//     }
//   }
// }
// let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));

// ### A를 #으로
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x == "A") answer += "#";
//     else answer += x;
//   }
//   return answer;
// }

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === "A") answer += "#";
//     else answer += x;
//   }
//   return answer;
// }

// let str = "BANANA";
// console.log(solution(str));

// ### 문자 찾기

function solution(text, str) {
  console.log(text.split(""));
  // ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R', 'P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G']
  console.log(text.split());
  //   text.split() , text.split(".") 등등..
  // 기준으로 나눠야하는데 그 기준점이 없으니 통으로 나옴 즉 그대로 나옴['COMPUTERPROGRAMMING']
  return text.split("").filter((v) => v === str).length;
}

// const text = "COMPUTERPROGRAMMING";
// const str = "R";

// console.log(solution(text, str));

function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
  //   let answer = 0;
  //   for (let x of s) {
  //     if (x === t) answer++;
  //   }
  //   return answer;
}

// let str = "COMPUTERPROGRAMMING";
// console.log(solution(str, "R"));

// ### 대문자
// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     //let num=x.charCodeAt();
//     //if(num>=65 && num<=90) answer++;
//     if (x === x.toUpperCase()) answer++;
//   }

//   return answer;
// }

// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     // if (x === x.toUpperCase()) answer++;
//     let num = x.charCodeAt();
//     if (num >= 65 && num <= 90) answer++;
//   }
//   return answer;
// }

// let str = "KoreaTimeGood";
// console.log(solution(str));

// ### 대문자로 통일
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     let num = x.charCodeAt();
//     if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
//     else answer += x;

//     //if(x===x.toLowerCase()) answer+=x.toUpperCase();
//     //else answer+=x;
//   }

//   return answer;
// }

// function solution(s) {
//   let answer = "";
//   //   for (let x of s) {
//   //     if (x === x.toLowerCase()) answer += x.toUpperCase();
//   //     else answer += x;
//   //   }
//   for (let x of s) {
//     // 대문자는 65~ 90
//     // 소문자는 97~ 122
//     // 두개의 차이는 32임
//     let num = x.charCodeAt();
//     if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
//     else answer += x;
//   }
//   return answer;
// }

// let str = "ItisTimeToStudy";
// console.log(solution(str));

// ### 대소문자 변환
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer += x.toLowerCase();
//     else answer += x.toUpperCase();
//   }
//   return answer;
// }

// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer += x.toLowerCase();
//     else answer += x.toUpperCase();
//   }
//   return answer;
// }

// console.log(solution("StuDY"));

// ### 가장 긴 문자열
// function solution(s) {
//   let answer = "",
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of s) {
//     if (x.length > max) {
//       max = x.length;
//       answer = x;
//     }
//   }
//   return answer;
// }

// function solution(s) {
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let x of s) {
//     if (x.length > max) {
//       max = x.length;
//       answer = x;
//     }
//   }
//   return answer;
// }
// let str = ["teacher", "time", "student", "beautiful", "good"];
// console.log(solution(str));

// ### 가운데 문자열 출력
// function solution(s) {
//   let answer;
//   let mid = Math.floor(s.length / 2);
//   if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
//   else answer = s.substring(mid - 1, mid + 1);
//   //if(s.length%2===1) answer=s.substr(mid, 1);
//   //else answer=s.substr(mid-1, 2);
//   return answer;
// }

// function solution(s) {
//   let answer;
//   let mid = Math.floor(s.length / 2);
//   if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
//   else answer = s.substring(mid - 1, mid + 1);
//   return answer;
// }
// console.log(solution("good"));

// ### 중복문자제거
// function solution(s) {
//   let answer = "";
//   //console.log(s.indexOf("K"));
//   for (let i = 0; i < s.length; i++) {
//     //console.log(s[i], i, s.indexOf(s[i]));
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
//   return answer;
// }
// function solution(s) {
//   let answer;
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
// }
// console.log(solution("ksekkset"));

// 중복단어제거
// function solution(s) {
//   //   let answer;
//   //   //console.log(s.indexOf("time"));
//   //   answer = s.filter(function (v, i) {
//   //     return s.indexOf(v) === i;
//   //   });
//   //   return answer;
//   let answer;
//   answer = s.filter((v, i) => s.indexOf(v) === i);
//   return answer;
// }
// let str = ["good", "time", "good", "time", "student"];
// console.log(solution(str));

// const test = "1 2 3 4";
// console.log("tt", test.split(" "));
// function solution2(s) {
//   var answer = "";
//   const arr = s.split(" ");
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = Number(arr[i]);

//     if (arr[i] < min) min = Number(arr[i]);
//   }
//   answer = `${min} ${max}`;
//   return answer;
// }

// console.log(solution2("-1 -2 -3 -4"));

// function solution(s) {
//   var answer = "";
//   const arr = s.split("");

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i].charCodeAt();

//     if (arr[i - 1] === " " && num >= 97 && num <= 122) {
//       answer += arr[i].toUpperCase();
//     } else if (num >= 65 && num <= 90) {
//       console.log(arr[i], "F는 어디..");
//       answer += arr[i].toLowerCase();
//     } else answer += arr[i];
//   }

//   return answer;
// }

// console.log("aa:", solution("3pople unfolFowed   me").trim(""), "dd");

// 일곱난장이
// function solution(arr) {
//   // sum - (arr[i]+arr[j] ) === 100이면 arr[i], arr[j]가 둘이 가짜난장이
//   // 얕은복사라 원본인 arr도 변형됨
//   let answer = arr;
//   let sum = arr.reduce((acc, cur) => acc + cur, 0);
//   console.log(sum, "sum");
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log("i", arr[i], "j", arr[j]);
//       if (sum - (arr[i] + arr[j]) === 100) {
//         arr.splice(j, 1);
//         arr.splice(i, 1);
//       }
//     }
//   }

//   return answer;
// }
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      const add = answer[i] + answer[j];
      const test = sum - add;
      if (test === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }
  return answer;
}
// 20 7 23 19 10 8 13
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
