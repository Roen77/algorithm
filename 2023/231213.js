// 1:02 ~ 1:16

// n은 진법 t는 미리구할 갯수, m은 참가 인원, 튜브 순서 p
function solution(n, t, m, p) {
  let answer;

  //   var tubeT = Array.apply(null, Array(t)).map((a, i) => i * m + p - 1);
  var tubeT = new Array(t).fill(0).map((a, i) => i * m + p - 1);
  console.log("t", tubeT);
  var line = "";
  var max = m * t + p;
  for (var i = 0; line.length <= max; i++) {
    line += i.toString(n);
  }
  return tubeT
    .map((a) => line[a])
    .join("")
    .toUpperCase();
  //   let saveString = "";
  //   let number = 0;
  //   //   미리 4개를 구하는데 참가인원은 2명이야
  //   //   console.log("2w진수", number.toString(2));
  //   // 최소한 t*m보다 긴 saveString 생성
  //   while (t * m > saveString.length) {
  //     saveString = saveString.concat(number.toString(n));
  //     console.log("saveString", saveString);
  //     number++;
  //   }

  //   // 필요한 t*m 길이만큼 slice
  //   saveString = saveString.slice(0, t * m);

  //   //  0, 1,2,3,4,5,6,7,8,  나는 0 번째, 2번째, 4번째..
  //   // p번째 순서에 대해서만 filter 처리 후 대문자 처리
  //   const answer = saveString
  //     .split("")
  //     .filter((num, idx) => {
  //       return (idx - p + 1) % m === 0;
  //     })
  //     .join("")
  //     .toUpperCase();

  return answer;
}

// console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
