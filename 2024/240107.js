// 완전탐색 블루투포스

// 소수구하기
function isPrime(num){
    // 1은 소수가 아님
    if(num===1) return false;
    for(let i = 2; i <parseInt(Math.sqrt(num)); i++){
        if(num%i === 0) return false
    }

    return true;
}
function solution(arr){
    let answer = []
    for(let x of arr){
        let tmp = x
        let res =0
        // 뒤집기
        // 123
        while(tmp){
            // 일의 자리 숫자
            let t = tmp % 10
            res += res*10 +t
            tmp = Math.floor(tmp/10)

        }
        console.log('res',res)
        if(isPrime(res)) answer.push(res);
        // const  res =String(x).split('').reverse().join('')
        // if(isPrime(Number(res))){
        //     answer.push(Number(res))
        // }

    }


    return answer

}


let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));