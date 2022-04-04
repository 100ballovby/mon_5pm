from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import sqlite3

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///currency.sqlite'  # прописываю путь к базе данных
#db = SQLAlchemy(app)  # сохраняем объект для всех команд к БД


@app.route('/')
def index():
    conn = sqlite3.connect('/Users/demidraksin/PycharmProjects/mon_5pm/25_lesson_0404/currency.sqlite')
    cursor = conn.cursor()
    data = cursor.execute('SELECT * FROM salaries').fetchall()  # выгружаю все из БД
    return render_template('index.html', seq=data)

if __name__ == '__main__':  # если запускается именно этот файл
    app.run()
