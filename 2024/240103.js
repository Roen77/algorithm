
// section 2 완전 탐색 & 1,2차원 배열

// function solution(n,arr){
//     let answer = ""
//     // 처음은 무조건 출력
//     answer += arr[0]

//     for(let i = 1; i < n; i++){
//         if(arr[i-1] <arr[i]){
//             answer +=" "+arr[i]
//         }
//     }

//     return answer

// }


// const n = 6
// const arr =[7 ,3 ,9 ,5 ,6, 12]
// console.log(solution(n,arr))


// 보이는 학생
// function solution(n,arr){
//     // 1. 처음에 슨 학생은 무조건 보임
//     // let answer = 1;

//     // for(let i = 1; i<n; i++){
//     //     let max = -1;
//     //     // 내 기준 앞에 애들 촥인
//     //     for(let j = 0; j <i; j++){
//     //         // 2. 내 기준 앞에 애들 중 제일 큰 값으로 치환
//     //         if(arr[j] > max){
//     //             max = arr[j]
//     //         }
//     //     }
//     //     // 내 앞에서 가장 큰 애들하고 나랑 비교
//     //     if(max < arr[i]){
//     //         answer += 1
//     //     }
//     // }

//     // 이중 for문 돌리지 않더라도 내 앞에서 가장 큰 숫자로 치환 가능
//     let answer = 1
//     //1. 맨앞 학생은 무조건 보임
//     let max = arr[0]
//     for(let i = 1; i<n; i++){
//         if(max < arr[i]){
//             max = arr[i]
//             answer += 1
//         }
//     }


//     return answer
// }
// const n =8
// const arr =[130 ,135, 148 ,140 ,145 ,150 ,150, 153]
// console.log(solution(n,arr))


// 가위바위보

// function solution(a,b){
//     let answer = []
//     // 1. a와 b 배열로 만들기
//     const arr1 = String(a).split("").map(v=>Number(v))
//     const arr2 = String(b).split("").map(v=>Number(v))

//     // 가위바위보
//     for(let i =0; i<arr1.length; i++){
//         // a가 이긴다는 가정하에
//         // 가위 1 바위 2 보 3
//         // a가 가위
//         if(arr1[i] === 1 && arr2[i] === 3){
//             answer.push("A")
//         }else if(arr1[i] ===2 && arr2[i] === 1){
//             answer.push("A")
//         }else if (arr1[i] === 3 && arr2[i] === 2){
//             answer.push("A")
//         }else if (arr1[i] === arr2[i]){
//             // 비김
//             answer.push("D")
//         }else {
//             // 위의 경우가 아니라면 b의 승리
//             answer.push("B")
//         }
//     }


//     return answer
// }


// const n =5
// const a = 23313
// const b = 11223

// console.log(solution(a,b))


// 점수계산

// function solution(n){
//     let answer = 0;
//     // 1.누적할 값을 지정
//     let tmp = 0;
//     const str =  String(n)

//     for(let i = 0; i< str.length; i++){
//         // 0이면 처음부터
//         if(Number(str[i]) === 0){
//             tmp = 0
//         }else {
//              // 0이 아니면 누적
//             tmp +=1
//             // console.log('i',i,tmp)
//             answer += tmp
//         }

//     }

//     return answer



// }
// const n =1011100110
// //   1 0 1 2 3 0 0 1 2 0
// console.log(solution(n))