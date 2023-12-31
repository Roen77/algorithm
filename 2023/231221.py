# A,B = map(int,input().split())

# arr = list(map(int,input().split()))


# prefix = [0 for _ in range(A+1)]

# for i in range(A):
#     prefix[i+1] = prefix[i]+ arr[i]

# answer = []
# for k in range(B,A+1):
#     answer.append(prefix[k] - prefix[k-B])


# # print(arr)
# # print('prefix',prefix)
# print(answer,max(answer))

# N = int(input())

# arr = list(map(int,input().split()))
# prefix = [0 for _ in range(N+1)]

# for i in range(N):
#     prefix[i+1] = max(prefix[i] + arr[i],arr[i])

# print(prefix)

graph = [list(map(int,input().split())) for _ in range(4)]

# print(graph)

x1,y1,x2,y2 = map(int,input().split())

prefix = [[0 for _ in range(5)] for _ in range(5)]

for y in range(4):
    for x in range(4):
        prefix[y+1][x+1] = prefix[y][x+1] + prefix[y+1][x] - prefix[y][x]+graph[y][x]

print(prefix)
answer = prefix[y2][x2] - prefix[y2][x1-1] - prefix[y1-1][x2] + prefix[y1-1][x1-1]