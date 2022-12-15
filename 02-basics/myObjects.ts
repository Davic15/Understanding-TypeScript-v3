const User = {
    name: 'David',
    email: 'dav@dav.com',
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {

}

let newUser = {name: 'david', isPaid: false, email: 'd@d.com'}

createUser(newUser);

function createCourse(): {name: string, price: number} {
    return {name: 'reactjs', price: 399}
}

//* Type Aliases
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUserType(user: User): User {
    return {name: '', email: '', isActive: false};
}

createUserType({name: '', email: '', isActive: false});


//* readonly
//* readonly = value cannot be changed.
//* ? = value is optional.
//* & = join two or more types to create a big type

type User2 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User2 = {
    _id: '123',
    name: 'David',
    email: 'a@a.com',
    isActive: false
}
myUser.email = 'b@b.com';
//myUser._id = '123'


type CardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string;
}

type cardDetails = CardNumber & cardDate & {
    cvv: number
}

let card: cardDetails = {
    cardNumber: '123',
    cardDate: '123',
    cvv: 123
}


export {}