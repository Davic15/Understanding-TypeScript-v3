//* Might be a type or another type.
//* Combination of many types of data

let score: number | string = 33;
score = 44;
score = '55';

type User3 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let david: User3 | Admin = {name: 'David', id: 2};
david = { username: 'da', id: 2};

function getDbId(id: number | string) {
    //* logic API
    console.log(`DB id is: ${id}`)
}

getDbId(3);
getDbId('3');

//* Check and verify the data type
function getDbIdOne(id: number | string) {
    if(typeof id === 'string') {
        id.toLowerCase()
    } else {
        id = id + 1;
    }
}

//* array
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ['1', '2', '3', '4'];
//* all numbers or all strings
const data3: number[] | string [] = [1, 2, 3, 4];
//* mix both types
const data4: (number | string)[] = [1, 2, '3'];


let seatAllotment: 'aisle' | 'middle' | 'windows';
seatAllotment = 'aisle';
//seatAllotment = 'crew';