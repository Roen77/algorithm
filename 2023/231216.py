

# 입력을 받고

# 디폴트로 input을 문자열 타입이기땜에..

# case1 단순히 정수일때
# number = int(input())

# list [0,0,0,0]
# list = ["he"]

# case 2 수열
# 스페이스 안치면 안되네... 1 2 3
# First,Second,Third = map(int,input().split())

# list1 = list(map(int,input().split()))

# print(First,Second,Third)
# print(list1)
# print(*list1)
# * 배열앞에 붙이면 그~대~로 출력 a b c

# case 3 단순히 문자일때
# string = input()

# 문자열
# First,Second,Third = map(str,input().split())
# list2 = list(map(str,input().split()))

# 계산을 하고

# 출력을 한다.
# print(list2)
# print(First,Second,Third,list)
# print(number+number)
# print(string+string)

# for number in range(3,5):
#     print('hi',number)

# number 가 참일때만 작동하는 것 10보자 작을때만 할건데~
number= 0
while number < 10:
    print(number)
    number = number+1

name = "코딩이"
if name == '코딩이':
    print("axheld")
else:
    print('노노')