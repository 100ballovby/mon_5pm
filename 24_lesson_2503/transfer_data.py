import json

with open('data.json') as f:  # открываю файл data.json и присваиваю его в переменную
    seq = json.loads(f.read())  # преобразовываю JSON в Python словарь
    for year in seq:  # перебираю полученные данные
        fee = seq[year]['fee']
        rate = seq[year]['dollar_rate']
        print(f'{year} | {fee} руб. | $1 = {rate} руб.')



