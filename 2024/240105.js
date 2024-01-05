
// 봉우리
function solution(arr){
    let answer = 0
    // 상하좌우 의 위치구하기
    // x좌표 기준
    const x = [0,1,0,-1]
    // y좌표 기준
    const y = [1,0,-1,0]
    // 이중 배열이니 두번 탐색
    for(let i =0; i< arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let flag = 1
            // 내 위치 기준 상하좌우 탐색해야 함
            for(let k = 0; k <x.length; k++){
                let dx = i + x[k]
                let dy = j + y[k]
                // dx와 dy도 결국 배열안의 위치이기때문에 0과 최대 길이 안에 있어야 함
                // 현재 위치의 상하좌우를 비교해서 하나라도 큰게 있다면 넘어감
                if(dx < arr.length && dy < arr.length && dx>= 0 && dy>= 0 && arr[i][j] <= arr[dx][dy]){
                    flag = 0
                    break;
                }
            }

            if(flag) answer ++
        }
    }

    return answer

}

let arr=[[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));