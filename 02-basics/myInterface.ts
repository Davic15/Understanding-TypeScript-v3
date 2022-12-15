//* Interfaces
//* Similar to types.
//* We can define methods and attributes
interface UserInterface {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string

    //* Methods definition
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

const userInter: UserInterface = {
    dbId: 22, 
    email: 'd@d.com', 
    userId: 123, 
    startTrail: () => { 
        return 'trail started'
    },
    //* names could be different from the ones we used when we defined the method
    getCoupon: (name: 'david', off: 10) => {
        return 10
    }
};
userInter.email = 'e@e.com';