# 완전탐색 // 재귀

# 재귀는 특정 조건이 있을 때 멈추어야 함 (무한 로프)


# for i in range(1,5):
#     for j in range(1,5):
#         print(i,j)

# 수열 만들기 (#15649, #15650, #15651, # 15652, # 15654, # 15655, # 15656 )

# def recur(number,output):
#     if number == M:
#         print(output)
#         return

#     for i in range(1, N+1):
#         recur(number+1,output+str(i)+" ")


# N,M = map(int,input().split())

# recur(0,"")


# 수열
# def recur(number):
#     if number == M:
#         print(*arr)
#         return

#     for i in range(1, N+1):
#         if i in arr:
#             continue
#         arr.append(i)
#         recur(number+1)
#         # 재귀 함수가 호출될때 돌아올때 다시 돌려주는 과정
#         arr.pop()


# N,M = map(int,input().split())
# arr = []
# recur(0)


# 숫자 야구
# # 100 ~ 999까지
import sys

# 파이썬은 재귀 함수는 1000번 정도 돌면 멈추니 의도적으로 크게 만드는 작업이 필요
sys.setrecursionlimit(99999999)
def recur(hint_idx,number):
    if hint_idx == 4:
        answer += 1
        recur(0,number+1)
        return

# 숫자가 1000이면 끝냄
    if number == 1000:
        return

    # 만약에 힌트 통과한다면
    # if 스트라이크 카운트랑 볼 카운트가 동일?
    recur(hint_idx+1,number)

    # 만약에 힌트 통과 못했다면 다시 처음부터,, 숫자는 증가시키고 다음숫자로 넘김
    recur(0,number+1)
n = int(input())

hint = [list(map(int,input().split())) for _ in range(n)]

answer = 0
recur(0,100)