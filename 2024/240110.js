// 합이 같은 부분집합
function solution(arr){
    let answer ="NO"
    let total = arr.reduce((acc,cur)=>acc+cur,0)
    let flag = 0
    function DFS(L,sum){
        if(flag) return
        if(L === arr.length){
            if((total-sum) === sum){
                answer = "YES"
                flag = 1
            }

        }else {
            // 합 더하기
            DFS(L+1,sum+arr[L])
            DFS(L+1,sum)
        }
    }


    DFS(0,0)

    return answer
}


const arr = [1,3,5,6,7,10]
console.log(solution(arr))