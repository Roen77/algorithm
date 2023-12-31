// 정렬과그리디
// 선택 정렬 오름차순
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[idx] > arr[j]) idx = j;
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//     console.log("i:", i, "idx", idx);
//   }
//   return answer;
//   //   let answer = arr;
//   //   for (let i = 0; i < arr.length; i++) {
//   //     let idx = i;
//   //     for (let j = i + 1; j < arr.length; j++) {
//   //       if (arr[j] < arr[idx]) idx = j;
//   //     }
//   //     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   //   }
//   //   return answer;
//   //   let anser = arr;
//   //   for (let i = 0; i < arr.length; i++) {
//   //     let idx = i;
//   //     for (let j = i + 1; j < arr.length; j++) {
//   //       //   console.log("i", i, "j", j); i = 0 1,2,3,4,5 다돔 이걸끝까지 돔
//   //       if (arr[j] < arr[idx]) idx = j;
//   //       //
//   //       [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   //       //   아래는안됌
//   //       //   arr[i] = arr[idx];
//   //       //   arr[idx] = arr[i];
//   //     }
//   //   }
//   //   return anser;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));
// 5 7 11 13 15 23

// const test = [1, 3];
// const test2 = [2, 4];
// [test[0], test[1]] = [test[1], test[0]];
// console.log("test??", test); => [3,1]

// 버블 정렬
// function solution(arr) {
//   //   let answer = arr;
//   //   for (let i = 0; i < arr.length - 1; i++) {
//   //     for (let j = 0; j < arr.length - i - 1; j++) {
//   //       console.log("i", i, "j", j);
//   //       if (arr[j] > arr[j + 1]) {
//   //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//   //       }
//   //     }
//   //   }
//   //   return answer;
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }

// let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

// Special Sort(구글 인터뷰)
// function solution(arr) {
//   return arr.filter((v) => v < 0).concat(arr.filter((v) => v > 0));
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       //   console.log("i", i, "j", j);
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }
// let arr = [1, 2, 3, 3];
// let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr));

// 삽입정렬
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     // 11
//     let tmp = arr[i],
//       j;
//     for (j = i - 1; j >= 0; j--) {
//       console.log("i", i, "j", j);
//       if (arr[j] > tmp) arr[j + 1] = arr[j];
//       else break;
//     }
//     arr[j + 1] = tmp;
//   }
//   return answer;
// }

// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

// function solution(size, arr) {
//   let answr = Array.from({ length: size }, () => 0);
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) {
//       if (x === size[i]) pos = i;
//     }
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answr[i] = answr[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         answr[i] = answr[i - 1];
//       }
//     }
//     answr[0] = x;
//   });
//   return answr;
//   // anser가 캐시
//   //   let answer = Array.from({ length: size }, () => 0);
//   //   arr.forEach((x) => {
//   //     let pos = -1;
//   //     for (let i = 0; i < size; i++)
//   //       if (x === answer[i]) {
//   //         // 이미 캐시에 있을 경우 위치 찾기
//   //         console.log("pos", i);
//   //         pos = i;
//   //       }
//   //     // 캐시에 처음들어가는거면
//   //     if (pos === -1) {
//   //       for (let i = size - 1; i >= 1; i--) {
//   //         console.log("첨인데영", i);
//   //         // 뒤로 한칸씩 밀기.
//   //         answer[i] = answer[i - 1];
//   //       }
//   //     } else {
//   //       // 이미 캐시에 있다면
//   //       for (let i = pos; i >= 1; i--) {
//   //         console.log("캐시있을때 i", i);
//   //         answer[i] = answer[i - 1];
//   //       }
//   //     }
//   //     answer[0] = x;
//   //   });
//   //   return answer;
// }

// let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// // let arr = [1, 2, 1];
// console.log(solution(5, arr));

// 현수
// function solution(arr) {
//   //   let answer = [];
//   //   let sortArr = arr.slice();
//   //   sortArr.sort((a, b) => a - b);
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   //   }
//   //   return answer;
//   let answer = [];
//   let sortArr = arr.slice();
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   }
//   return answer;
// }

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// console.log(solution(arr));

// 삽입
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i],
//       j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > tmp) arr[j + 1] = arr[j];
//       else break;
//     }
//     arr[j + 1] = tmp;
//   }
//   return answer;
// }
// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

// lru
// function solution(size, arr) {
//   // anser가 캐시
//   // let answer = Array.from({ length: size }, () => 0);
//   let answer = [];
//   arr.forEach((x) => {
//     let pos = -1;
//     // 히트
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     // 미스
//     if (pos === -1) {
//       answer.unshift(x);
//       if (answer.length > size) answer.pop();
//       // 인덱스 1까지땡김
//       // for (let i = size - 1; i >= 1; i--) {
//       //   answer[i] = answer[i - 1];
//       // }
//       // answer[0] = x;
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(x);
//       // for (let i = pos; i >= 1; i--) {
//       //   answer[i] = answer[i - 1];
//       // }
//       // answer[0] = x;
//     }
//     answer[0] = x;
//   });

//   return answer;
// }
// let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));

// 좌표정렬
// function solution() {
//   let answer = arr;
//   arr.sort((a, b) => {
//     if (a[0] === b[0]) return a[1] - b[1];
//     else return a[0] - b[0];
//   });
//   return answer;
// }
// let arr = [
//   [2, 7],
//   [1, 3],
//   [1, 2],
//   [2, 5],
//   [3, 6],
// ];
// console.log(solution(arr));

// 회의
// function solution(meeting) {
//   let answer = 0;
//   meeting.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     else return a[1] - b[1];
//   });
//   // console.log("me", meeting);
//   let et = 0;
//   for (let x of meeting) {
//     if (x[0] >= et) {
//       answer++;
//       et = x[1];
//     }
//   }
//   return answer;
// }
// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
// console.log(solution(arr));

// 결혼식
// function solution(times) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let T_line = [];
//   for (let x of times) {
//     T_line.push([x[0], "s"]);
//     T_line.push([x[1], "e"]);
//   }
//   // console.log(T_line, "tline");
//   T_line.sort((a, b) => {
//     if (a[0] === b[0]) {
//       // 이러면 숫자가아니라 정렬안됨..
//       return a[1].charCodeAt() - b[1].charCodeAt();
//     } else return a[0] - b[0];
//   });
//   // console.log(T_line, "tline");
//   let cnt = 0;
//   for (let x of T_line) {
//     if (x[1] === "s") cnt++;
//     else cnt--;

//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }
// let arr = [
//   [14, 18],
//   [12, 15],
//   [15, 20],
//   [20, 30],
//   [5, 14],
// ];
// console.log(solution(arr));

// 이분 검색
// function solution(target, arr) {
//   // 이분은 정렬되어있어야함 미리.. 오름이든 내림이든 정렬이 무조건되어있어야함
//   let answer;
//   arr.sort((a, b) => a - b);
//   let lt = 0,
//     rt = arr.length - 1;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > target) {
//       rt = mid - 1;
//     } else lt = mid + 1;
//   }

//   return answer;
// }

// let arr = [23, 87, 65, 12, 57, 32, 99, 81];
// console.log(solution(32, arr));
// 뮤비
// function count(songs, capacity) {
//   // cnt는 dvd 1장
//   // 용량이 capacity
//   let cnt = 1,
//     sum = 0;
//   for (let x of songs) {
//     if (sum + x > capacity) {
//       // 저장할수없어서 dvd를 늘림 cnt가 dvd
//       cnt++;
//       sum = x;
//     } else {
//       sum += x;
//     }
//   }
//   return cnt;
// }
// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((acc, cur) => acc + cur, 0);

//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else lt = mid + 1;
//   }

//   return answer;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));

// 마굿간
// 말배치 계산
function count(stable, dist) {
  let cnt = 1;
  ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(stable, mid) >= c) {
      // 말배치가능
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
