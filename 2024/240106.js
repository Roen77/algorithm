// 블루투포스
// 자릿수의 합

// function solution(n,k,arr){
//     let answer = -1;
//     let temArr = new Set()
//     // 같은 숫자의 카드가 여러장 가능 총 3장 뽑
//     for(let i = 0; i<n; i++){
//         for(let j = i+1; j<n; j++){
//             for(let k = j+1; k<n; k++){
//                 const sum = arr[i]+arr[j]+arr[k]

//                 temArr.add(sum)
//             }
//         }
//     }

//     console.log("tmp",Array.from(temArr).sort((a,b)=>b-a))
//     return Array.from(temArr).sort((a,b)=>b-a)[k-1]
// }

// let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));



// 자릿수의 합
function solution(n,arr){
    let answer = 0
    let max = Number.MIN_SAFE_INTEGER
    for(let x of arr){
          // 1. 각 자리수를 구하고 그 합을 구한다.
          let sum = 0;
          let tmp = x
          while(tmp){
            // 일의자리수부터 구함 ex) 8
            sum += (tmp%10)
            // 일의 자리수 제외 나머지 ex) 12
            tmp = Math.floor(tmp/10)
            // 계속 반복
          }

        //   2.합 비교
        if(sum > max ){
            max = sum
            answer = x
        }else if (sum === max){
            // 합이 같다면 x가 더 큰값으로 바꾸기
            if(answer < x){
                answer = x
            }
        }
    }


    return answer
}

// let arr=[128,12345670,12345670,12345670,12345670,12345670,12345670,12345673,12345675];
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));