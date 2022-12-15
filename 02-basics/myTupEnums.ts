//* the order of values inside of the array, doesnt matter
//const user: (string | number)[] = [1, 'fm'];

//* with Tuples, the order of the array matters.
//* have order in our data
let tupleUser: [string, number, boolean];
tupleUser =['fm', 123, true];
//tupleUser = [123, true, 'fm']

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]
const newUser: User = [123, 'Dav'];

//* possible problems, 
// modify values
newUser[1] = 'David'
newUser[0] = 111;
//* adding other stuffs that doesn't follow the definition, depending of the TS version.
//newUser.push(true)




export {}