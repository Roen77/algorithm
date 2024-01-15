// 순열
function solution(m, arr){
    let answer=[];
    // 아래 중복순열과는 달리 중복을 제거해야하기 때문에 값을 체크하는 로직이 필요함
    const n = arr.length
    const ch = Array.from({length:n},()=>0)
    const tmp = Array.from({length:m},()=>0)
    function DFS(L){
        if(L === m){
            answer.push(tmp.slice())
            return
        }else {
            for(let i = 0; i<n; i++){
                if(ch[i] === 0){
                    ch[i]=1
                    tmp[L]= arr[i]
                    DFS(L+1)
                    // 다시 돌아왔을땐 체크 풀어줌
                    ch[i]=0
                }
            }
        }
    }

    DFS(0)
    return answer;
}

// 중복순열
// function solution(m,arr){
//     let answer = []
//     let tmp = Array.from({length:m},()=>0)
//     function DFS(L){
//         if(L ===m){
//             answer.push(tmp.slice())
//             return
//         }else {
//             for(let i = 0; i <arr.length; i++){
//                 tmp[L] = arr[i]
//                 DFS(L+1)
//             }
//         }
//     }
// DFS(0)

//     return answer
// }


let arr=[3, 6, 9];
console.log(solution(2, arr));