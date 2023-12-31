function solution(msg) {
  let answer = [];
  let wordMap = new Map();
  let idx = 27;

  for (let i = 1; i <= 26; i++) {
    wordMap[String.fromCharCode(i + 64)] = i;
  }

  while (msg !== "") {
    for (let i = msg.length; i >= 0; i--) {
      let w = msg.slice(0, i);
      let wc = msg.slice(0, i + 1);

      if (wordMap[w]) {
        answer.push(wordMap[w]);
        msg = msg.slice(i, msg.length);
        console.log("i", i, "msg", msg, "w", w);

        wordMap[wc] = idx;
        idx++;
        break;
      }
    }
  }

  //   let wordMap = new Map();
  //   let idx = 27;

  //   for (let i = 1; i <= 26; i++) {
  //     const code = i + 64;

  //     wordMap[String.fromCharCode(code)] = i;
  //   }

  //   while (msg !== "") {
  //     for (let i = msg.length; i >= 0; i--) {
  //       const w = msg.slice(0, i);
  //       const wc = msg.slice(0, i + 1);

  //       if (wordMap[w]) {
  //         answer.push(wordMap[w]);

  //         msg = msg.slice(i, msg.length);

  //         wordMap[wc] = idx;

  //         idx++;
  //         break;
  //       }
  //     }
  //   }
  return answer;
}
// const text = "KAKAO";
const text = "ABABABABABABABAB";
console.log("so", solution(text));
//     console.log('A'.charCodeAt());  // 65
// console.log('A'.charCodeAt(0)); // 65
// String.fromCharCode(code1, code2, ..., codeN);
