let list = [
    {
        text: 'Create JS function',
        done: true
    },
    {
        text: 'Read the docs',
        done: false
    },
    {
        text: 'Make HTML template',
        done: true
    },
    {
        text: 'Troubleshooting',
        done: false
    },
    {
        text: 'Make an live demo prototype',
        done: true
    },
    {
        text: 'Refactor JS function',
        done: true
    },
    {
        text: 'Get money',
        done: false
    },
]

function create_list(array) {
    let ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = array[i].text;

        if (array[i].done) {
            li.classList.add('done');
        }
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

create_list(list);
