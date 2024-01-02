// 재귀 이진트리
// function solution(n){
//     let answer="";
//     function DFS(n){
//          if(n===0) return;
//          else{
//              DFS(parseInt(n/2));
//              answer+=String(n%2);
//          }
//     }
//     DFS(n);
//     return answer;
// }

// console.log(solution(11));

// function solution(n){
// let answer="";
// function DFS(v){
//     if(v>7) return;
//     else{
//         // 전위 순회
//         // answer+=(v+' ');
//         // DFS(v*2);
//         // DFS(v*2+1);

//         // 중위 순회
//         // DFS(v*2)
//         // answer +=(v +' ')
//         // DFS(v*2+1)


//         // 후위 순회
//         DFS(v*2)
//         DFS(v*2+1)
//         answer +=(v +' ')
//     }
// }
// DFS(n);
// return answer;
// }

// console.log(solution(1));


//  집합
function solution(n){
    let answer=[];
    let ch=Array.from({length:n+1}, ()=>0);
    function DFS(L){
        if(L===n+1){
            let tmp="";
            for(let i=1; i<=n; i++){
                if(ch[i]===1) tmp+=(i+" ");
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else{

            ch[L]=1;
            DFS(L+1);
            ch[L]=0;
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));