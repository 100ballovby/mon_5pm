import sqlite3

connection = sqlite3.connect('test.db')  # подключаюсь к файлу базы данных
cursor = connection.cursor()  # управляет всем в БД
cursor.execute('CREATE TABLE messages (id INTEGER PRIMARY KEY, title TEXT, message TEXT)')

