//* Access Modifiers: Private, public and protected (inheritance).
class User {
    //* public = can be access everywhere
    public email: string;
    name: string;
    //* we need an initializer
    // private = can be access inside the class
    private readonly city: string = 'Quito';
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const david = new User ('d@d.com', 'david');
//* It can't be access because it is private
//david.city;

//* The best (professional) way to declare a class is:
class UserTwo {

    protected _courseCount = 1;

    readonly city: string = 'Manta';
    constructor(
        public email: string, 
        public name: string,
        //private userId: string
        ) {
    }

    //* private methond can't be access from outside
    private deleteToken() {
        console.log('Token Deleted')
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    //* Setters have no type.
    set courseCount(courseNumber: number) {
        if (courseNumber <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNumber;
    }
}

//* the private methods/attributes are accessible inside the class
//* The protected methods/attributes are accessibles only inside the class and the classes where we use inheritance.
class SubUser extends UserTwo {
    isFamily: boolean = true;

    changeCourseCount() {
        this._courseCount = 4;
    }
}

const frank = new UserTwo('d@d.com', 'Dav');
//frank.deleteToken();