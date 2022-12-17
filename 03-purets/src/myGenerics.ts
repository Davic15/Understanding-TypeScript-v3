const score: Array<number> = [];
const names: Array<string> = [];


function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

//* Generics
//* if the input is number the return type is automatically a number
function identityThree<T>(val: T): T {
    return val;
}

identityThree('3');

function identityFour<Type>(val: Type): Type {
    return val;
}

interface Bootle {
    brand: string,
    type: number
}

//* we cam use an interface as a generic
identityFour<Bootle>({brand: 'one', type: 2});



//* Input as Array
function getSearchProducts<T>(products: T[]): T {
    // do some logic here (DB example)
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}

anotherFunction(3, {connection: '1', username: '1', password: '2'});

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];
    addToCard(product: T) {
        this.cart.push(product);
    } 
}