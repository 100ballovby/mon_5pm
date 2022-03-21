from flask import Flask, render_template, request, url_for, flash, redirect

app = Flask(__name__)
app.config['SECRET_KEY'] = '593d29bc26b00cc468c5e93299602626852422a48cf3489c'

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
    if request.method == 'POST':  # если форма отправляется
        title = request.form['title']  # обращаюсь к полю title из формы и забираю информацию оттуда в переменную
        message = request.form['content']

        if not title:  # если не заполнили заголовок сообщения
            flash('Title is required.')  # вывести сообщение об этом
        elif not message:  # если не заполнили поле с текстом сообщения
            flash('Message is required.')  # вывести сообщение об этом
        else:  # иначе
            messages.append({'title': title, 'content': message})  # добавить сообщение в список
            return redirect(url_for('index'))  # перенаправить пользователя на главную
    return render_template('create.html')


if __name__ == '__main__':  # если запускается именно ЭТОТ файл, то
    app.run()  # активировать "сервер" сайта
