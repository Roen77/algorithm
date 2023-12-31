// 할인 행사

// function solution(want, number, discount) {
//   var answer = 0;
//   const obj = want.reduce((acc, cur, i) => {
//     acc[cur] = number[i];
//     return acc;
//   }, {});

//   discount.forEach((_, i) => {
//     const discountItem = discount.slice(i, i + 10);
//     const wantObj = { ...obj };
//     discountItem.forEach((item, i) => {
//       if (wantObj[item]) {
//         wantObj[item]--;
//       }
//       if (wantObj[item] === 0) {
//         delete wantObj[item];
//       }
//     });
//     if (Object.keys(wantObj).length === 0) {
//       answer++;
//     }
//   });

//   return answer;
// }

// 4;
// 5;
// 6;
// 7;
// 8;
// 9;
// 10;
// 11;
// 12;
// 13;
// 14;
// 15;
// 16;
// 17;
// function solution(want, number, discount) {
//   //   let count = 0;
//   //   for (let i = 0; i < discount.length - 9; i++) {
//   //     const slice = discount.slice(i, i + 10);
//   //     console.log("i:", slice);
//   //     let flag = true;
//   //     for (let j = 0; j < want.length; j++) {
//   //       if (slice.filter((item) => item === want[j]).length !== number[j]) {
//   //         flag = false;
//   //         break;
//   //       }
//   //     }
//   //     if (flag) count += 1;
//   //   }
//   let count = 0;

//   for (let i = 0; i <= discount.length - 10; i++) {
//     let slice = discount.slice(i, i + 10);
//     let flag = true;
//     want.forEach((wantItem, i) => {
//       if (slice.filter((item) => item === wantItem).length !== number[i]) {
//         console.log("aa");
//         flag = false;
//         return;
//       }
//     });

//     if (flag) {
//       count++;
//     }
//   }
//   return count;
// }

// const want = ["banana", "apple", "rice", "pork", "pot"];
// const number = [3, 2, 2, 2, 1];
// const discount = [
//   "chicken",
//   "apple",
//   "apple",
//   "banana",
//   "rice",
//   "apple",
//   "pork",
//   "banana",
//   "pork",
//   "rice",
//   "pot",
//   "banana",
//   "apple",
//   "banana",
// ];
// const want2 = ["apple"];
// const number2 = [10];
// const discount2 = [
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
// ];

// console.log(solution(want2, number2, discount2));

function solution(citations) {
  //   var answer = 0;

  //   citations = citations.sort((a, b) => b - a);
  //   console.log("arr", citations);
  //   let arr = [];

  //   for (let i = 0; i < citations.length; i++) {
  //     // console.log("arr[i]:", citations[i]);
  //     arr.push(citations[i]);
  //     if (citations[i] < arr.length) {
  //       console.log("arr[i]:", citations[i]);
  //       break;
  //       //   return;
  //     }
  //     console.log("break 밖 arr[i]:", citations[i]);
  //     answer++;
  //   }

  //   return answer;

  let answer = 0;
  //   역정렬
  //   [6,5,3,1,0]
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
    else break;
  }

  return answer;
}
// const citations = [3, 0, 6, 1, 5];
const citations = [0, 5, 6, 7, 8];
console.log(solution(citations));
// [3, 0, 6, 1, 5]	3
// [0,5,6,7,8] -> [4]
// 예를 들어 [9,9,9,9,1] 이면 h-index는 4입니다.
