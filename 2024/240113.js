
// 중복순열
function solution(n,r){
    let answer = []
    let tmp = Array.from({length:r},()=>0)
    function DFS(L){
        if(L ===r){
            answer.push(tmp.slice())
            return
        }else {
            for(let i = 1; i <=n; i++){
                tmp[L] = i
                DFS(L+1)
            }
        }
    }
DFS(0)

    return answer
}

console.log(solution(3,2))