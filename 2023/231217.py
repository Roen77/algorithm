
# # 3번 출력할건데
# # TC = int(input())

# # 3번 for문
# # for _ in range(TC):
# #     number = int(input())  #1000036000099
# #     for i in range(2,1_000_001):
# #         if number % i == 0:  #100만 이하의 약수가 존재함
# #             print("NO")
# #             break
# #         if i == 1_000_000: #100만 이하의 약수가 존재하지 않는다.
# #             print("YES")


# candy = int(input()) #6
# answer = 0
# for A in range(0,candy+1):
#     for B in range(0,candy+1):
#         for C in range(0,candy+1):
#             if A + B + C == candy:
#                 if A >= B +2:
#                     if A != 0 and B != 0 and C != 0 :
#                         if C % 2 == 0 :
#                             answer +=1

# print(answer)

# # 파이썬은 약 1억번의 연산
# A,B,C,D,E,F = map(int, input().split())

# for x in  range(-10000,10001):
#     for y in range(-10000,10001):
#         if A*x + B*y == C:
#             if D*x + E*y == F:
#                 print(x,y)
#                 break


# A가 정답으로 생각할 수 있는 모든 수 넣어보기
# B가 도전한 내용에 맞는지 확인하기
#


# n = int(input())

# numbers = [list(map(str,input().split())) for _ in range(n)]
# # string을 미리 넣어준 이유는, 나중에 쪼개기 위해서

# answer = 0

# # (1) 세 자리 숫자 만들기
# for a in range(1,10): # 100의 자리수
#     for b in range(1,10): # 10의 자리수
#         for c in range(1,10): # 1의 자리수
#             counter = 0

#             # (2) 다른 세 자리수
#             if( a == b or b == c or c == a):
#                 continue

#             # continue, 그 숫자를 넘김
#             # break, 반복문을 넘김

#             # (3) 배열에 넣은 조건을 넣어주기
#             for array in numbers:
#                 check = list(array[0]) # ['1','2','3']
#                 strike = int(array[1])
#                 ball = int(array[2])

#                 strike_count = 0
#                 ball_count = 0

#                 #스트라이크 계산기

#                 if (a == int(check[0])):
#                     strike_count += 1
#                 if (b == int(check[1])):
#                     strike_count += 1
#                 if (c == int(check[2])):
#                     strike_count += 1


#                 #볼 계산기
#                 if (a == int(check[1]) or a == int(check[2])):
#                     ball_count += 1
#                 if (b == int(check[0]) or b == int(check[2])):
#                     ball_count += 1
#                 if (c == int(check[0]) or c == int(check[1])):
#                     ball_count += 1


#                 #(4) 매칭 여부 확인하기
#                 if (strike != strike_count):
#                     break
#                 if (ball != ball_count):
#                     break

#                 counter += 1

#             if counter == n:
#                 answer += 1

# print(answer)




# n = int(input())
# arr = []
# arr_y = []
# arr_x = []
# answer = [-1]*n
n = int(input())
arr = []
arr_x = []
arr_y = []
answer = [-1]*n

# 1. 한 점을 고른다.
# 2. 내 점에서 가장가까운 순서대로 정렬한다.
# 3. 가장 가까운 애들끼리 움직인다.

# 입력받기
for _ in range(n):
    # 15 14 ...
    a,b = map(int,input().split())
    arr.append([a,b])
    # arr = [[15,14],[15,16],[14,15],[16,15]]
    arr_x.append(a)
    # arr_x = [15,15,14,16]
    arr_y.append(b)
    # arr_y = [14,16,15,15]

# 만날 장소 정하기
for y in arr_y:
    for x in arr_x:

        dist = []
        # 각점들의 위치 비교
        for ex,ey in arr:
            print('ex',ex,'ey',ey,'x:',x,'y:',y)
            d = abs(ex-x) + abs(ey-y)
            dist.append(d)
            # [0,2,2,2]

        print(dist,'dist')
    # [0,2,2,2]

        dist.sort()
        tmp = 0
        for i in range(len(dist)):
            d = dist[i]
            tmp += d
            if(answer[i] == -1):
                answer[i] = tmp
            else:
                answer[i] = min(tmp,answer[i])


          # 가까운 순서대로 정렬하기
#         dist.sort()

print(answer,'answer')


# 입력 받기
# for _ in range(n):
#     a,b = map(int,input().split())
#     arr.append([a,b])
#     arr_y.append(b)
#     arr_x.append(a)

# 만날 장소 정하기
# for y in arr_y:
#     for x in arr_x:
#         dist = []

#         # 만날 장소로 각각의 점들이 오는 비용 계산하기
#         for ex,ey in arr:
#             d = abs(ex-x) + abs(ey-y)
#             dist.append(d)


#         # 가까운 순서대로 정렬하기
#         dist.sort()

#         tmp = 0
#         for i in range(len(dist)):
#             d = dist[i]
#             tmp += d
#             if answer[i] == -1:
#                 answer[i] = tmp
#             else :
#                 answer[i] = min(tmp, answer[i])

# print(*answer)
