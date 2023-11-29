/* Alert Button - Inspo Msg */
document.getElementById('btn-alrt').onclick = () => {
    alert('You are doing the best you can and that is enough :)');
}

/* try to refactor to be more efficient */
/* Hover to Change Button */
document.getElementById('btn-alrt').onmouseover = () => {
    document.getElementById('btn-alrt').innerText = '<3';
}
document.getElementById('btn-alrt').onmouseleave = () => {
    document.getElementById('btn-alrt').innerText = 'Reminder';
}

/* Incrementing Button - Fake Followers */
let count = 0;

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    document.getElementById('txt-counter').innerHTML = count;
}
/* Change Text Colour Odd/Even - (if-else) */
let black = "#000000"
let red = "#FF0000"


if (count % 2 == 0) {
    document.getElementById('txt-counter').style.color = black;
    console.log(typeof count);
}

else {
    document.getElementById('txt-counter').style.color = red;

}

/* Changing Copyright Year */
const date = new Date();
let year = date.getFullYear();
document.getElementById('currentyear').innerHTML = year;