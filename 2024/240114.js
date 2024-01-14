// 동전교환
function solution(arr,max){
    let ansnwer = 1000

    function DFS(L,sum){
        if(sum > max)return
        if(L>=ansnwer) return
        if(sum === max){
            ansnwer = Math.min(ansnwer,L)
            return
        }else {
            for(let i = 0; i<arr.length; i++){
                DFS(L+1,sum+arr[i])
            }
        }
    }

    DFS(0,0)
    return ansnwer
}

const arr =[1,2,5]
const max = 15


console.log(solution(arr,max))