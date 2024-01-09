// 재귀
// 깊이우선탐색 DFS
// 재귀는 항상 반복해서 자기자신을 호출하기 때문에 그것을 멈춰줄 조건문이 있어야함

// function solution(n){

//     function DFS(num){
//         if(num === 8){
//             return
//         }
//        else {
//         console.log(num,'전')
//         DFS(num+1)
//         console.log(num)
//        }
//     }


//     DFS(n)

// }

// console.log(solution(1))

// 이진수로 변환
// function solution(n){
//     let answer = ""
//     function DFS(num){
//         if(num === 0){
//             return
//         }else {
//             DFS(parseInt(num/2))
//             answer += String(num%2)
//         }
//     }

//     DFS(n)
//     return answer
// }


// console.log(solution(11))


// 부분집합 구하기(DFS)

function solution(n){
//   부분집합
let answer = []
// 이미 갔던 곳은 가면 안됨, 그러기 위해 체크배열
const ch = Array.from({length:n+1},()=>0)

    function DFS(L){
        if(L === n+1){
            let tmp = ""
            for(let i = 1; i<=n; i++){
                console.log('ch',ch)
                if(ch[i] === 1) tmp += (i+" ")
            }
            console.log('tmp',tmp)
            if(tmp.length > 0) answer.push(tmp)
        }else {
            // 체크해주고
            ch[L] = 1
            // 재귀
            DFS(L+1)
            // 백하기전에풀기
            ch[L]=0
            DFS(L+1)

        }
    }

    DFS(1)
    return answer
}


console.log(solution(3))