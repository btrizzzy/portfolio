/* Alert Button - Inspo Msg */
const btnAlert = document.getElementById('btn-alrt')

btnAlert.onclick = () => {
    alert('You are doing the best you can and that is enough :)');
}

/* try to refactor to be more efficient */
/* Hover to Change Button */

btnAlert.onmouseover = () => {
    btnAlert.innerText = '!!!!!!!!!!!!!!!!!!!!!!!!!!';
}
btnAlert.onmouseleave = () => {
    btnAlert.innerText = 'Daily Affirmation';
}

/* Incrementing Button - Fake Followers */
let count = 0;
const btnCounter = document.getElementById('btn-counter')
const txtCounter = document.getElementById('txt-counter')

btnCounter.onclick = () => {
    count = count + 1;
    txtCounter.innerHTML = count;
    /* Change Text Colour Odd/Even - (if-else) */
    if (count % 2 === 0) {
        txtCounter.classList.add('even');
        txtCounter.classList.remove('odd');
    }

    else {
        txtCounter.classList.add('odd');
        txtCounter.classList.remove('even');
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