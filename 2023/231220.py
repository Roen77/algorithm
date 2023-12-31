
# n = int(input())

# # 약수임
# # for i in range(1,n+1):
# # 약수빠르게구하는법..반띵하면됨
# for i in range(1,int(n**0.5)+1):
#     if n % i == 0:
#         print(i, n//i)

# A,B = map(int,input().split())

# A -= 1

# tmp_A = 0

# tmp_A += A
# for i in range(1,99):
#     tmp_A += (A//(2**i))*((2**i)- (2**(i-1)))

# tmp_B = 0

# tmp_B += B
# for i in range(1,99):
#     tmp_B += (B//(2**i))*((2**i)- (2**(i-1)))

# print(tmp_B,tmp_A,tmp_B - tmp_A,'답')

# 2의 3제곱
# print(2**3)

# 최대공약수
def _gcd(a,b):
    while a % b != 0 :
        tmp = a%b
        a = b
        b = tmp
    return b

# 최소 공배수
def _lcm(a,b):
    return a*b//_gcd(a,b)