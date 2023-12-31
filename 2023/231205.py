# 기본 알고리즘

  # 1. 모든 수를 문자열로 변환
import numbers


def solution(numbers):
    # 1. 모든 수를 문자열로 변환
    numbers = list(map(str, numbers))
    print(numbers,'bu')

    # 2. x+y와 y+x를 비교하여 정렬
    sortArr =  numbers.sort(key=lambda x: (x * 4)[:4], reverse=True)
    # 3. 정렬된 numbers를 이어붙인 뒤 반환
    answer = ''.join(numbers)
    print(sortArr,'buss')
    # 0이 여러개일 경우, "000" 대신 "0"을 반환하도록 예외처리
    if answer[0] == '0':
        return '0'
    else:
        return answer


print(solution([6,10,12]))