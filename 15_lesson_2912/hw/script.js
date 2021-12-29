function call() {
    let ans = Number(prompt('Какую задачу ты выполнил? ', ''));
    return ans - 1;
}

function get_done() {
    let res = call();
    let done = document.querySelectorAll('.task');
    for (let i = 0; i < done.length; i++) {
        if (i === res) {
            let t_done = done[i];
            t_done.classList.add('done');
        }
    }
}