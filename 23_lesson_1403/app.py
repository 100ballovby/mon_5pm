from flask import Flask, render_template

app = Flask(__name__)

messages = [
    {'title': 'Message One',
     'content': 'Message One text'},
    {'title': 'Message Two',
     'content': 'Message Two text'}
]


@app.route('/')  # что будет, если зайти на главную страницу
def index():
    return render_template('index.html', items=messages)


@app.route('/create', methods=['GET', 'POST'])
def create():
    return render_template('create.html')


if __name__ == '__main__':  # если запускается именно ЭТОТ файл, то
    app.run()  # активировать "сервер" сайта
