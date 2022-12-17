//* Narrowing
//* Tyoe guards, ask for every type when you write a method to check parameters type

function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase();
}



//* in operator

interface UserDetection {
    name: string,
    email: string
}

interface Adminitrator {
    name: string,
    email: string,
    isAdmin: boolean
}

//* narrowing to check possible errors
function isAdminAccount(account: UserDetection | Adminitrator) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}

//* instanceof
//* It is use with a new keyword
function logValue(x: Date | string) {
    if (x instanceof Date) { 
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim != undefined
}



function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return 'Fish Food'
    } else {
        pet
        return 'Bird Good'
    }
}

interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if(shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side;
}

//* Exhaustiveness checking
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.length;
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape
    }
}