from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')  # что будет, если зайти на главную страницу
@app.route('/<name>')  # что будет, если зайти на страниц mysite.com/имя_пользователя
def show_page(name=None):  # имя пользователя по умолчанию не существует
    context = {
        'name': name,
        'title': 'Дратути'
    }  # словарь дополнительных объектов, которые мы передадим HTML странице
    return render_template('index.html', items=context)


@app.errorhandler(404)  # отлавливаю ошибку 404 (страница не найдена)
def not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':  # если запускается именно ЭТОТ файл, то
    app.run(port=8080)  # активировать "сервер" сайта
