// 등수 구하기

// function solution(arr){
//     // 1. 초깃값으로 전부 1등으로 지정

//   let answer = Array.from({length:arr.length},()=>1)

//   for(let i = 0; i< arr.length; i++){
//     for(let j = 0; j< arr.length; j++){
//         // 1. 나보다 등수가 크면 내 등수를 +1해주어 등수 떨어트리기
//         if(arr[i] < arr[j]){
//             answer[i] ++
//         }
//     }
//   }

//   return answer
// }



// // const arr = [87,89,92,100,76]
// const arr = [92,92,92,76]

// console.log(solution(arr))


// 격자 합
function solution(arr){
    let answer = 0
    let sum1 = sum2 = 0
    for(let i =0; i <arr.length; i++){
        sum1 = sum2 = 0
        for(let j = 0; j< arr.length; j++){
            //1. 행의 합 과 열의 합 비교
            sum1 +=arr[i][j]
            sum2 += arr[j][i]
        }
        answer = Math.max(sum1,sum2,answer)
    }

    // 2. 대각선의 합 구하기전에 초기화
    sum1 = sum2 =0
    // 왼쪽 대각선의 합
    for(let i = 0; i<arr.length; i++){
        sum1 += arr[i][i]
        sum2 += arr[i][arr.length-i-1]
    }

    answer = Math.max(sum1,sum2,answer)

    return answer

}



let arr=[[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr));