alert("Welcome Besties!")

const FIRSTNAME = "Briana"; // capitalize as syntax to remember you set it as a constant
let lastName = "Truong"; // don't use var since it's outdated

let age = "25";

console.log(typeof age, age); // checks what type of value something is - anything in "" is a string
console.log(FIRSTNAME, lastName);

let beverage = "oj"; // global scope

const fullName = (first, last, drink, like) => { 
    console.log(first, last);
    console.log(`${first}'s favourite drink is ${drink}.`); // template literals
    let fruit = "bananas"; // local scope
    console.log(`${first} does ${like} like ${fruit}.`);
}


console.log(beverage)


namesList = [
    "Blackout Bri",
    "Tuna Slayer",
    "Lil Bro"
];
namesList.push("Big Gangster"); // adds to list
namesList.push("Kuya Ronald");
console.log(namesList);
namesList.pop(); // takes the last value off
console.log(namesList);


fullName("Briana", "Truong", "choco milkie", "not");
fullName("Tina", "Le", "coffee", "really");

// for loop
for (let i = 0; i < namesList.length; i++) { 
    fullName(namesList[i]);
}

// while loop
let j = 0;
while (j < namesList.length) {
    fullName(namesList[j]);
    j++;
}