from random import choice

alphabet = 'abcdef0123456789'

str = ''
for i in range(6):
    str += choice(alphabet)
print(f'#{str}')
