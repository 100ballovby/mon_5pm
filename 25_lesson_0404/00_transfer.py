import json
import sqlite3

connection = sqlite3.connect('currency.sqlite')  # подключение к БД
cursor = connection.cursor()  # управление всеми операциями с БД

with open('data.json') as file:
    salaries = json.loads(file.read())

    for year in salaries:
        fee = salaries[year]['fee']  # достаю ключ, хранящий зарплату (среднюю за год)
        denom = salaries[year]['denominated']  # достаю статус деноминации (True/False)
        rate = salaries[year]['dollar_rate']  # среднегодовой курс доллара
        query = f'''INSERT INTO salaries (year, salary, den_status, dollar_rate)
        VALUES ({year}, {fee}, {denom}, {rate})'''
        cursor.execute(query)  # передаю переменную с запросом курсору
        connection.commit()  # зафиксировать изменения

