let greetings: string = 'Hello David';

let mynum = 6;

//* string
//* Only methods for string
greetings.toLocaleLowerCase();
console.log(greetings);

//* numbers
//* Only methods for number
let userId: number = 334455;
userId.toString

//* boolean
//* Only methods for boolean
let isLoggedIn: boolean = false;
isLoggedIn.valueOf

//* Not a good practice
let userId2: number;
userId2 = 111;

//* Not a good practice
let userId3: number = 222;

//* Good practice
let userId4 = 555;

//* Good practice
let hero: string;

function getHero() {
    return 'thor'
}

hero = getHero();

export {}