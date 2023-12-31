
# def greeting(count):
#     print(count)
#     if count == 99:
#         return
#     greeting(count+1)



# for i in range(1,5):
#     for j in range(1,5):
#         print(i,j)

# def recur(number,output):
#     if number == M:
#         print(output)
#         return

#     for i in range(1,N+1):
#         recur(number+1,output+str(i)+" ")




# N,M = map(int,input().split())

# recur(0,"")


# def recur(number):
#     if number == M:
#         print(*arr)
#         return

#     for i in range(1,N+1):
#         arr.append(i)
#         recur(number+1)
#         arr.pop()




# N,M = map(int,input().split())
# arr  = []

# recur(0)


def recur(hint_idx,number):


n = int(input())


hint = [list(map(int,input().split())) for _ in range(n)]

answer = 0
recur(0,100)