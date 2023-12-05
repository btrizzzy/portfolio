/* Alert Button - Inspo Msg */
const btnAlert = document.getElementById('btn-alrt')

btnAlert.onclick = () => {
    alert('You are doing the best you can and that is enough :)');
}


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
    let listItem = document.createElement('li')
    if (i % 2 === 0) {
        listItem.textContent = 'Even'
    }
    else {
        listItem.textContent = 'Odd'
    }
    document.getElementById('numberlist').appendChild(listItem);
}


/* Changing Copyright Year */
const currentYear = document.getElementById('currentyear')
let date = new Date();
let year = date.getFullYear();

currentYear.innerHTML = '&copy; ' + year + ' Briana Truong. All rights reserved.';