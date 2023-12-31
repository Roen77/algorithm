function isPrime(num) {
  if (num === 1 || !num) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;

  n.toString(k)
    .split("0")
    .map((v) => {
      if (isPrime(Number(v))) {
        answer++;
      }
    });

  return answer;
}

const n = 110011;
const k = 10;

console.log(solution(n, k));
