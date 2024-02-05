// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
//extra part ,

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
    return result;
}

const shovoHeight = inchToFeet(75);
// console.log(shovoHeight);
const shovoHeight2 = inchToFeet2(75);
// console.log(shovoHeight2);

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const dhakaToMymen = mileToKilometer(100);
console.log(dhakaToMymen);