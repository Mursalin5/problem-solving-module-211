/**
 * simple logic
 * year will be a leap year if the year is divisible by 4
 */

function isLeapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const islep = isLeapYear(2024);
console.log(islep);




function isLeapYear2 (year){
    if(year % 100 !== 0 &&  year % 4 ===0){
        return true;
    }
    else if(year % 100 ===0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const lepyear = isLeapYear2(2100);
const lepyear2 = isLeapYear2(2400);
const lepyear3 = isLeapYear2(1900);
const lepyear4= isLeapYear2(2052);
console.log(lepyear, lepyear2, lepyear3, lepyear4);