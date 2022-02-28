"""
Синтаксис функций

def имя_функции(аргументы):
--->тело функции
"""


def power(n, p):
    res = 1
    for i in range(p):  # повторить p раз
        res *= n
    return res

print(power(2, 7))

for i in range(10):
    print(power(i, 3))

