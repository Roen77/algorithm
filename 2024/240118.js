// nCr = n-1Cr-1 + n-1Cr
// 공식

// function solution(n, r){
//     let answer=[];

//     function DFS(n, r){
//      if(n === r || r===0) return 1
//      else return DFS(n-1,r-1)+DFS(n-1,r)
//     }
//     answer=DFS(n, r);
//     return answer;
// }

// 값이 많은 경우 메모이제이션
function solution(n,r){
    let answer = []
    let dy = Array.from(Array(35),()=>Array(35).fill(0))
   console.log('d',dy)

    function DFS(n,r){
        if(dy[n][r] > 0) return dy[n][r]
        if(n ===r || r === 0 )return 1
        else return dy[n][r] = DFS(n-1,r-1)+DFS(n-1,r)
    }


  answer = DFS(n,r)
    return answer

}

console.log(solution(33, 19));