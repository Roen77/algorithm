// function solution(n, arr) {
//   let answer = [];
//   //   for (let i = 0; i < arr.length; i++) {
//   //     const index = answer.findIndex((num) => num === arr[i]);

//   //     if (index > -1) {
//   //       answer.splice(index, 1);
//   //     }
//   //     answer.unshift(arr[i]);
//   //     if (answer.length > 5) {
//   //       answer = answer.slice(0, 5);
//   //     }
//   //   }
//   //   arr.forEach((item, i) => {
//   //     const index = answer.findIndex((num) => num === item);

//   //     if (index > -1) {
//   //       answer.splice(index, 1);
//   //     }
//   //     answer.unshift(item);
//   //     if (answer.length > n) answer.pop();
//   //   });
//   //   let answer = [];
//   let count = 0;
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < n; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       answer.unshift(x);
//       if (answer.length > n) answer.pop();
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(x);
//     }
//   });

//   //   console.log("answer", answer);

//   return answer;
// }

// 대소문자구별이중요..

// function solution(size, arr) {
//   let answer = Array.from({ length: size }, () => 0);
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = x;
//   });
//   let answer = Array.from({ length: size }, () => 0);
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = x;
//   });

//   return answer;
// }

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));

// 답안나옴
// function solution(s) {
//   var answer = [];
//   let sortArr = [];
//   //   console.log("s", s.split("},{"));
//   const str = s.split("},{");

//   str.forEach((s, i) => {
//     let arr = [];
//     // console.log("s", s);
//     for (let x of s) {
//       //   console.log("x", x, Number(x));

//       if (Number(x)) {
//         // console.log("x무엇..?", x);
//         arr.push(x);
//       }
//     }
//     // console.log(arr, "arr", `${i}번째`);

//     sortArr.push(arr);
//   });

//   sortArr.sort((a, b) => a.length - b.length);
//   console.log(sortArr, "srotA");

//   sortArr.forEach((arr) => {
//     arr.forEach((x) => {
//       if (!answer.includes(x)) {
//         answer.push(Number(x));
//       }
//     });
//   });

//   return answer;
// }

// function solution(s) {
//   const tuples = [];
//   s.slice(2, s.length - 2)
//     .split("},{")
//     .forEach((tupleString) => {
//       const tuple = tupleString.split(",").map((str) => Number(str));
//       tuples.push(tuple);
//     });

//   tuples.sort((a, b) => a.length - b.length);

//   console.log("tu", tuples);

//   const answer = [];
//   tuples.forEach((tuple) => {
//     tuple.forEach((num) => {
//       if (!answer.includes(num)) {
//         answer.push(num);
//       }
//     });
//   });
//   //   tuples.forEach((tuple) => {
//   //     tuple.forEach((num) => {
//   //       if (!answer.includes(num)) {
//   //         answer.push(num);
//   //       }
//   //     });
//   //   });
//   return answer;
// }
// // console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
// console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
// console.log(solution("{{123}}"));
// console.log(solution("{{20,111},{111}}"));

// 숫자 변환하기
function solution(x, y, n) {
  let answer = -1;
  const stack = [{ num: y, tried: 0 }];
  console.log("ss", stack);
  while (stack.length) {
    const { num, tried } = stack.shift();
    console.log("무엇..", num, tried);
    if (num === x) {
      answer = tried;
      break;
    }

    if (num % 2 === 0) {
      stack.push({ num: num / 2, tried: tried + 1 });
    }
    if (num % 3 === 0) {
      stack.push({ num: num / 3, tried: tried + 1 });
    }

    if (num - n >= x) {
      stack.push({ num: num - n, tried: tried + 1 });
    }
  }
  return answer;
  //   const stack = [{ num: y, tried: 0 }];
  //   while (stack.length !== 0) {
  //     const { num, tried } = stack.shift();

  //     if (num === x) {
  //       answer = tried;
  //       break;
  //     }

  //     if (num % 2 === 0) {
  //       stack.push({ num: num / 2, tried: tried + 1 });
  //     }
  //     if (num % 3 === 0) {
  //       stack.push({ num: num / 3, tried: tried + 1 });
  //     }
  //     if (num - n >= x) {
  //       stack.push({ num: num - n, tried: tried + 1 });
  //     }
  //   }
  //   return answer;
}
console.log(solution(10, 40, 5));
