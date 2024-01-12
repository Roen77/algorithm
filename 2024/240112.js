
// 최대 점수

function solution(n,ps,pt){
    let answer = 0

    function DFS(L,time,sum){
        if(n < time) return
        if(L ===ps.length){
            answer = Math.max(answer,sum)
            return
        }else {

                DFS(L+1,time+pt[L],sum+ps[L])
                DFS(L+1,time,sum)


        }
    }
    DFS(0,0,0)
    return answer

}
let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));