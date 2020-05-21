/* eslint-disable no-plusplus */
/* eslint-disable operator-assignment */
const run = document.querySelector('#run');
const reset = document.querySelector('#reset');

function rot13() {
        const input = document.querySelector('#input').value;
        const answer = document.querySelector('#answer');
        const array = new Array(input.length);
        let newStr = '';

        for (let i = 0; i < array.length; i++) {
                array[i] = input[i].charCodeAt();
                if (array[i] >= 65 && array[i] < 78) {
                        array[i] = array[i] + 13;
                } else if (array[i] >= 78 && array[i] <= 90) {
                        array[i] = array[i] + 19;
                }
        }
        for (let i = 0; i < array.length; i++) {
                newStr += String.fromCharCode(array[i]).toUpperCase();
        }
        answer.textContent = newStr;
}

function resetPage() {
        window.location.reload();
}

reset.addEventListener('click', resetPage);
run.addEventListener('click', rot13);
