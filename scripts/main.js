/* Alert Button - Inspo Msg */
document.getElementById('btn-alrt').onclick = () => {
    alert('You are doing the best you can and that is enough :)');
}

/* try to refactor to be more efficient */
/* Hover to Change Button */
document.getElementById('btn-alrt').onmouseover = () => {
    document.getElementById('btn-alrt').innerText = '!!!!!!!!!!!!!!!!!!!!!!!!!!';
}
document.getElementById('btn-alrt').onmouseleave = () => {
    document.getElementById('btn-alrt').innerText = 'Daily Affirmation';
}

/* Incrementing Button - Fake Followers */
let count = 0;

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    document.getElementById('txt-counter').innerHTML = count;
    /* Change Text Colour Odd/Even - (if-else) */
    if (count % 2 === 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    }

    else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
}

/* for Loop - Even/Odd Ordered List */

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li')
    listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd' ;
    document.getElementById('numbers').appendChild(listItem);
}


/* Changing Copyright Year */
const date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = '&copy; ' + year + ' Briana Truong. All rights reserved.';