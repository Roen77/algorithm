// // function solution(k, dungeons) {
// //   let answer = -1;
// //   const dfs = (k, dungeons, prev) => {
// //     for (let i = 0; i < dungeons.length; i++) {
// //       const [req, use] = dungeons[i];
// //       if (!req || req > k) continue;
// //       const copy = [...dungeons].map((v) => [...v]);
// //       copy[i] = [null, null];
// //       dfs(k - use, copy, prev + 1);
// //     }
// //     return (answer = Math.max(prev, answer));
// //   };
// //   dfs(k, dungeons, 0);
// //   return answer;
// // }
// // function solution(k, dun) {
// //   let answer = -1;
// //   function DFS(k, dun, L) {
// //     for (let i = 0; i < dun.length; i++) {
// //       const [req, use] = dun[i];
// //       if (req > k || !req) continue;
// //       //   체크를 이렇게 할수도있구나.. 그냥 이렇게하면 갔던던전또감.. copy안하면 갔던데 또감..
// //       const copy = [...dun].map((v) => [...v]);
// //       copy[i] = [null, null];
// //       DFS(k - use, copy, L + 1);
// //     }
// //     return (answer = Math.max(answer, L));
// //   }
// //   // 피로도, 던전 ,레벨
// //   DFS(k, dun, 0);
// //   return answer;
// // }

// function solution(k, d) {
//   // 이것도 풀림
//   //   const N = d.length;
//   //   const visited = new Array(N).fill(0);
//   //   let answer = -1;
//   //   function dfs(k, L) {
//   //     for (let i = 0; i < N; i++) {
//   //       //   if (visited[i] || k < d[i][0]) continue;
//   //       if (!visited[i] && k >= d[i][0]) {
//   //         visited[i] = 1;
//   //         dfs(k - d[i][1], L + 1);
//   //         visited[i] = 0;
//   //       }
//   //     }
//   //     answer = Math.max(answer, L);
//   //   }
//   //   dfs(k, 0);
//   //   return answer;
//   //   const N = d.length;
//   //   const visited = new Array(N).fill(0);
//   //   let answer = -1;
//   //   function dfs(k, L) {
//   //     for (let i = 0; i < N; i++) {
//   //       if (visited[i] || k < d[i][0]) continue;
//   //       visited[i] = 1;
//   //       dfs(k - d[i][1], L + 1);
//   //       visited[i] = 0;
//   //     }
//   //     answer = Math.max(answer, L);
//   //   }
//   //   dfs(k, 0);
//   //   return answer;
//   //   이거 정답
//   //   const N = d.length;
//   //   const visited = new Array(N).fill(0);
//   //   let ans = 0;
//   //   function dfs(k, cnt) {
//   //     ans = Math.max(cnt, ans);
//   //     for (let j = 0; j < N; j++) {
//   //       if (k >= d[j][0] && !visited[j]) {
//   //         visited[j] = 1;
//   //         dfs(k - d[j][1], cnt + 1);
//   //         visited[j] = 0;
//   //       }
//   //     }
//   //   }
//   //   dfs(k, 0);
//   //   return ans;
// }

// const dun = [
//   [80, 20],
//   [50, 40],
//   [30, 10],
// ];
// const k = 80;

// console.log("던전?", solution(k, dun));

// const test = {
//   1: "dd",
// };

// // console.log("test", 1 in test);

// function solution(phones) {
//   //   let answer = true;
//   //   phones.sort((a, b) => {
//   //     if (a.length === b.length) {
//   //       return a - b;
//   //     } else return a.length - b.length;
//   //   });

//   //   const obj = phones[0].split("").reduce((acc, cur) => {
//   //     if (acc[cur] in acc) {
//   //       acc[cur] += 1;
//   //     } else {
//   //       acc[cur] = 1;
//   //     }
//   //     return acc;
//   //   }, {});

//   //   for (let i = 1; i < phones.length; i++) {
//   //     const copyObj = { ...obj };
//   //     for (let k of phones[i]) {
//   //       if (!copyObj[k] || copyObj[k] <= 0) continue;
//   //       copyObj[k]--;
//   //     }
//   //     console.log("jv", copyObj);
//   //     if (Object.values(copyObj).every((v) => v === 0)) {
//   //       return false;
//   //     }
//   //   }

//   //   return answer;
//   console.log("sort", phones.sort(), "12345".indexOf("23"));
//   let answer = phones
//     .sort()
//     .some((value, index, self) => self[index + 1]?.indexOf(value) === 0);
//   return !answer;
// }

// // const phones = ["119", "97674223", "1195524421"];
// // const phones = ["123", "456", "789"];
// const phones = ["12", "123", "1235", "567", "88"];
// // const phones = ["12", "123"];
// // const phones = ["12", "123"];

// console.log("sol 무엇..", solution(phones));

function format(str) {
  let strList = [];
  const strData = str
    .split("")
    .map((v) => v.toLowerCase())
    .map((v, i, arr) => i !== arr.length - 1 && v + arr[i + 1])
    .filter((v) => !!v);

  strData.forEach((v) => {
    const check = v
      .split("")
      .every((s) => s.charCodeAt() >= 97 && s.charCodeAt() <= 122);

    if (check) strList.push(v);
  });

  return strList;
}

function solution(str1, str2) {
  const str1Arr = format(str1);
  const str2Arr = format(str2);

  if (!str1Arr.length && !str2Arr.length) {
    return 65536;
  } else if (!str1Arr.length || !str2Arr.length) {
    return (1 / strLen.concat(str2Len).length) * 65536;
  } else {
    return parseInt(
      (strLen.filter((v) => str2Len.includes(v)).length /
        (strLen.concat(str2Len).length -
          strLen.filter((v) => str2Len.includes(v)).length)) *
        65536
    );
  }

  //   const strLen = str1Arr.length ? str1Arr : [1];
  //   const str2Len = str2Arr.length ? str2Arr : [1];
  //   const union = strLen.filter((v) => str2Len.includes(v)).length;

  //   return union === 0
  //     ? 65536
  //     : parseInt(
  //         (union /
  //           (strLen.concat(str2Len).length -
  //             strLen.filter((v) => str2Len.includes(v)).length)) *
  //           65536
  //       );
}

// const str1 = "FRANCE";
// const str2 = "french";
// const str1 = "aa1+aa2";
// const str2 = "AAAA12";
const str1 = "E=M*C^2";
const str2 = "e=m*c^2";

const tt = "A";
const tt2 = "a";

console.log(solution(str1, str2), tt.charCodeAt(), tt2.charCodeAt());
