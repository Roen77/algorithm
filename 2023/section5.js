// 효율성
// function solution(arr1, arr2) {
//   //   let answer = [];
//   //   let n = arr1.length;
//   //   let m = arr2.length;
//   //   let p1 = (p2 = 0);
//   //   while (p1 < n && p2 < m) {
//   //     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
//   //     else answer.push(arr2[p2++]);
//   //   }
//   //   while (p1 < n) answer.push(arr1[p1++]);
//   //   while (p2 < m) answer.push(arr2[p2++]);
//   //   return answer;
//   //   return a.concat(b).sort((a, b) => a - b);
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   let p1 = (p2 = 0);
//   while (p1 < n && p2 < m) {
//     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
//     else answer.push(arr2[p2++]);
//   }

//   while (p1 < n) answer.push(arr1[p1++]);
//   while (p2 < m) answer.push(arr2[p2++]);

//   return answer;
// }

// let a = [1, 3, 5];
// let b = [2, 3, 6, 7, 9];
// console.log(solution(a, b), "?");

// 공통원소 구하기
// function solution(arr1, arr2) {
//   //   let answer = [];
//   //   arr1.sort((a, b) => a - b);
//   //   arr2.sort((a, b) => a - b);
//   //   let p1 = (p2 = 0);
//   //   while (p1 < arr1.length && p2 < arr2.length) {
//   //     if (arr1[p1] == arr2[p2]) {
//   //       answer.push(arr1[p1++]);
//   //       p2++;
//   //     } else if (arr1[p1] < arr2[p2]) p1++;
//   //     else p2++;
//   //   }
//   //   return answer;
//   let answer = [];
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let p1 = (p2 = 0);
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] == arr2[p2]) {
//       answer.push(arr1[p1++]);
//     } else if (arr1[p1] < arr2[p2]) p1++;
//     else p2++;
//   }
//   return answer;
// }

// let a = [1, 3, 9, 5, 2];
// let b = [3, 2, 5, 7, 8];
// console.log(solution(a, b));

// ## 연속 부분수열1
// function solution(m, arr) {
//   //   let answer = 0,
//   //     lt = 0,
//   //     sum = 0;
//   //   for (let rt = 0; rt < arr.length; rt++) {
//   //     sum += arr[rt];
//   //     if (sum === m) answer++;
//   //     while (sum >= m) {
//   //       console.log("rt:", rt, "lt:", lt);
//   //       sum -= arr[lt++];
//   //       if (sum === m) answer++;
//   //     }
//   //   }
//   //   return answer;
//   let answer = 0;
//   let lt = 0;
//   let sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }
//   return answer;
// }

// let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

//  ## 연속부분수열2
// function solution(m, arr) {
//   let answer = 0,
//     sum = 0,
//     lt = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     while (sum > m) {
//       sum -= arr[lt++];
//     }
//     answer += rt - lt + 1;
//   }
//   return answer;
// }

// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));

// ## 최대매출
// function solution(k, arr) {
//   //   let answer,
//   //     sum = 0;
//   //   for (let i = 0; i < k; i++) sum += arr[i];
//   //   answer = sum;
//   //   for (let i = k; i < arr.length; i++) {
//   //     sum += arr[i] - arr[i - k];
//   //     answer = Math.max(answer, sum);
//   //   }
//   //   return answer;
//   let answer = 0,
//     sum = 0;
//   for (let i = 0; i < k; i++) sum += arr[i];
//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     answer = Math.max(answer, sum);
//     // console.log(answer, "sum", sum);
//   }
//   return answer;
// }

// let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

// ### 학급 회장(해쉬)
// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sH) {
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
//   let answer;
//   console.log(s.split(""));
//   let max = Number.MIN_SAFE_INTEGER;
//   const obj = s.split("").reduce((acc, cur) => {
//     if (cur in acc) {
//       acc[cur]++;
//     } else acc[cur] = 1;
//     return acc;
//   }, {});
//   //   console.log("obj", obj);
//   Object.entries(obj).map(([key, value]) => {
//     if (value > max) {
//       max = value;
//       answer = key;
//     }
//   });
//   return answer;
// }

// let str = "BACBACCACCBDEDE";
// console.log(solution(str));

// 아나그램(해쉬)
// function solution(str1, str2) {
//   //   let answer = "YES";
//   //   let sH = new Map();
//   //   for (let x of str1) {
//   //     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//   //     else sH.set(x, 1);
//   //   }
//   //   for (let x of str2) {
//   //     if (!sH.has(x) || sH.get(x) == 0) return "NO";
//   //     sH.set(x, sH.get(x) - 1);
//   //   }
//   //   return answer;
//   let answer = "yes";
//   let sH = new Map();
//   for (let x of str1) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }

//   for (let x of str2) {
//     if (!sH.has(x) || sH.get(x) === 0) return "no";
//     sH.set(x, sH.get(x) - 1);
//   }

//   return answer;
// }

// let a = "AbaAeCe";
// let b = "baeeACA";
// console.log(solution(a, b), "??");

// #모든 아나그램
function compareMaps(map1, map2) {
  //   if (map1.size !== map2.size) return false;
  //   for (let [key, val] of map1) {
  //     if (!map2.has(key) || map2.get(key) !== val) return false;
  //   }
  //   return true;
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
// function solution(s, t) {
//   //   let answer = 0;
//   //   let tH = new Map();
//   //   let sH = new Map();
//   //   for (let x of t) {
//   //     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//   //     else tH.set(x, 1);
//   //   }
//   //   let len = t.length - 1;
//   //   for (let i = 0; i < len; i++) {
//   //     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//   //     else sH.set(s[i], 1);
//   //   }
//   //   let lt = 0;
//   //   for (let rt = len; rt < s.length; rt++) {
//   //     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//   //     else sH.set(s[rt], 1);
//   //     if (compareMaps(sH, tH)) answer++;
//   //     sH.set(s[lt], sH.get(s[lt]) - 1);
//   //     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//   //     lt++;
//   //   }
//   //   return answer;
//   let answr = 0;
//   let tH = new Map();
//   let sH = new Map();
//   for (let x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }
//   let len = t.length - 1;
//   for (let i = 0; i < len; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }

//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++) {
//     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//     else sH.set(s[rt], 1);
//     if (compareMaps(sH, tH)) answr++;
//     sH.set(s[lt], sH.get(s[lt]) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//     lt++;
//   }
//   return answr;
// }

// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));

// 연속부분수열 1
// function solution(m, arr) {
//   // 6보다 크면 rt 증가시키고 6보다 작거나 같으면 lt빼줌 그러면서 비교
//   // 투포인터는 oN 시간복잡도

//   let answer = 0,
//     lt = 0,
//     sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     // 더한다
//     sum += arr[rt];
//     // 더햇으니확인
//     if (sum === m) answer++;
//     // 조건이 참일때만 돌겟다
//     while (sum >= m) {
//       // 후치라 빼고 lt가 증가
//       sum -= arr[lt++];
//       if (sum === m) {
//         answer++;
//         console.log(lt, rt);
//       }
//     }
//   }
//   return answer;
// }

// let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

// 연속부분수열2
// function solution(m, arr) {
//   // let answer=0, sum=0, lt=0;
//   // for(let rt=0; rt<arr.length; rt++){
//   //     sum+=arr[rt];
//   //     while(sum>m){
//   //         sum-=arr[lt++];
//   //     }
//   //     answer+=(rt-lt+1);
//   // }
//   // return answer;
//   // 5보다 크면 lt를 옮기고 줄여줘야함
//   let answer = 0,
//     sum = 0,
//     lt = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     while (sum > m) {
//       sum -= arr[lt++];
//     }
//     answer += rt - lt + 1;
//   }
//   return answer;
// }
// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));

// 아나그램
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  // abc 전부 셋팅
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // 2개만 미리 셋팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  // 비교
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // 2. 추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // 비교
    if (compareMaps(sH, tH)) answer++;

    // 1. 빼고
    // lt하나 줄여줌
    sH.set(s[lt], sH.get(s[lt]) - 1);
    // 0이면 없는거니 아예삭제
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
