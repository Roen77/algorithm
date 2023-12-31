// function solution(numbers, target) {
//   const stack = [];
//   const addTarget = (tried, sum, stack) => {
//     if (numbers.length === tried) {
//       if (sum === target) {
//         stack.push(true);
//       }
//       return;
//     }

//     addTarget(tried + 1, sum + numbers[tried], stack);
//     addTarget(tried + 1, sum - numbers[tried], stack);
//   };

//   addTarget(0, 0, stack);

//   return stack.length;
// }
// function solution(numbers, target) {
//   const stack = [];
//   const addTarget = (tried, sum) => {
//     if (numbers.length === tried) {
//       if (sum === target) {
//         stack.push(true);
//       }
//       return;
//     }

//     addTarget(tried + 1, sum + numbers[tried]);
//     addTarget(tried + 1, sum - numbers[tried]);
//   };

//   addTarget(0, 0);

//   return stack.length;
// }

3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
function solution(numbers, target) {
  let answer = 0;

  //   function getAnswer(x, value) {
  //     if (x < numbers.length) {
  //       getAnswer(x + 1, value + numbers[x]);
  //       getAnswer(x + 1, value - numbers[x]);
  //     } else {
  //       if (value === target) {
  //         answer++;
  //       }
  //     }
  //   }
  //   getAnswer(0, 0);

  function DFS(sum, L) {
    if (L < numbers.length) {
      DFS(sum + numbers[L], L + 1);
      DFS(sum - numbers[L], L + 1);
    } else {
      if (sum === target) {
        answer++;
      }
    }
  }
  // DFS(0,0)
  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target));
