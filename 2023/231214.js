// 'A', 'E', 'I', 'O', 'U'

const str = ["A", "E", "I", "O", "U"];
const word = "AAAAE";

function solution() {
  //   let answer = [];
  //   function DFS(sum, L) {
  //     if (L === 6) {
  //       return;
  //     } else {
  //       for (let i = 0; i < str.length; i++) {
  //         if (sum + str[i] === find) {
  //           console.log("같다", L, sum + str[i]);
  //         }
  //         answer.push(sum);
  //         DFS(sum + str[i], L + 1);
  //       }
  //     }
  //   }

  //   DFS("", 0);
  //   console.log([...new Set(answer)].indexOf(word), "arr");
  //   const stack1 = ["A", "E", "I", "O", "U"],
  //     stack2 = [],
  //     stack3 = [],
  //     stack4 = [],
  //     stack5 = [];

  //   stack1.forEach((str) => {
  //     for (let i = 0; i <= 4; i++) {
  //       stack2.push(str.concat(stack1[i]));
  //     }
  //   });
  //   console.log("sta", stack2);

  //   stack2.forEach((str) => {
  //     for (let i = 0; i <= 4; i++) {
  //       stack3.push(str.concat(stack1[i]));
  //     }
  //   });
  //   console.log("star3", stack3);

  //   stack3.forEach((str) => {
  //     for (let i = 0; i <= 4; i++) {
  //       stack4.push(str.concat(stack1[i]));
  //     }
  //   });

  //   stack4.forEach((str) => {
  //     for (let i = 0; i <= 4; i++) {
  //       stack5.push(str.concat(stack1[i]));
  //     }
  //   });

  //   const words = [...stack1, ...stack2, ...stack3, ...stack4, ...stack5];

  //   console.log("w", words);

  //   words.sort();
  //   const answer = words.indexOf(word) + 1;

  const first = {
    A: 1,
    E: 782,
    I: 1563,
    O: 2344,
    U: 3125,
  };

  const second = {
    A: 1,
    E: 157,
    I: 313,
    O: 469,
    U: 625,
  };

  const third = {
    A: 1,
    E: 32,
    I: 63,
    O: 94,
    U: 125,
  };

  const fourth = {
    A: 1,
    E: 7,
    I: 13,
    O: 19,
    U: 25,
  };

  const last = {
    A: 1,
    E: 2,
    I: 3,
    O: 4,
    U: 5,
  };

  const order = [first, second, third, fourth, last];

  return [...word].reduce((acc, letter, index) => {
    console.log(
      letter,
      "lettr",
      index,
      "index",
      "order[index][letter]",
      order[index][letter]
    );
    acc += order[index][letter];
    return acc;
  }, 0);

  return answer;
}

console.log(solution(str));
