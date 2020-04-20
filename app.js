const balloon = document.querySelector('#balloon')
const explode = document.querySelector('#explode')
const done = document.querySelector('#done')

var balloon_size = 30;

const handler = function (event) {
    if (event.keyCode == 73) {
        balloon_size = balloon_size + 10;
    } else if (event.keyCode == 68) {
        balloon_size = balloon_size - 10;
    }
    if (balloon_size > 60) {
        balloon.style.display = 'none'
        explode.style.display = 'block'
        document.removeEventListener('keyup', handler);
    } else if (balloon_size <= 0) {
        balloon.style.display = 'none'
        done.style.display = 'block'
        document.removeEventListener('keyup', handler);
    } else {
        balloon.style.fontSize = balloon_size + 'px'
    }
}

document.addEventListener('keyup', handler);