//* restrict somebody choice about some options.
// old version to do it
/*
const AISLE = 0
const MIDDLE = 1;
const WINDOW = 2;*/

//* they have default values, from 0 to n-1
//* we can put a number and the next one will move forward +1
//* we can use numbers AISLE = 10
//* we can use string AISLE = 'aisle'

const enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 3,
    WINDOW,
    FOURTH 
}

const hcSeat = SeatChoice.AISLE
