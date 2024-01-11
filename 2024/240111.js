// 바둑이 승차(DFS)
function solution(c,arr){
    let answer = 0;
    let n = arr.length
    function DFS(L,sum){
        // [1,3]
        // console.log('sum',sum,L,'L')
        // 0 , 1, 1+3, 1,0,3,0
        if(sum > c) return
        if(L === n)
        {
            answer = Math.max(answer,sum)
            return
        }else {
            DFS(L+1,sum+arr[L])
            // 위조건이  충족되서 백함
            DFS(L+1,sum)
        }
    }

    DFS(0,0)
    return answer
}


let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));