console.log("1", 5 + 2);
console.log("2", 5 - 2);
console.log("3", 5*2);
console.log("4", 8/2);
console.log("5", 7 % 3);
 
let x = 2;
let y = 5;
console.log("6", ++x); //x = 3
console.log("7", --y); //y = 4
console.log("8", x += 10); // x = 13
console.log("9", y -= 5); // y = -1
console.log("10", y *= 3);
console.log("11", x /= 2);

console.log("12", 3 == 4);
console.log("13", 3 != 4);
console.log("14", 3 > 4);
console.log("15", 3 < 4);
console.log("16", 3 >= 4);
console.log("17", 3 <= 4);
console.log("18", 3 === 4);
console.log("19", 3 !== 4);
console.log("20", 3 > 10 && 4 < 5);
console.log("21", 3 > 10 || 4 < 5);
console.log("22", !(3 > 10 && 4 < 5));

if (2 + 3 == 3){
    result = "The answer is 5";
    console.log("23", result);

}

if (5 > 2){
    answer = "5 is greater than 2";
}
console.log("24", answer);

if(3 > 10 && 4 < 5){
    outcome = "Yes, it is";
} else {
    outcome = "No, it isn't"
}
console.log("25", outcome);

console.log("26", "My name" + " is Ebere");

let a = "what are";
console.log("27", a += " you doing?");

console.log("28", +true);


let num = -5;
number = (num > 0) ? "Yes" : "No";
console.log("29", number);

console.log("30", typeof "Ebere");
console.log("31", typeof +"21");   //use typeof to check the type
console.log("32", typeof -"21"); 
console.log("33", 2**5);

let n = 6;
r = n % 2;
ans = (r == 0) ? " which is result makes it even" : " which is the result makes it odd";
console.log("34", r + ans);


let names = "Optimus"

switch(names){
    case "Ebere":
        console.log("This is Ebere");
        break;
    case "Margaret":
        console.log("This is Margaret");
        break;
    case "KC":
        console.log("This is KC");
        break;
    default:
        console.log("None of these people exist");
}




let result1
switch ( 2 > 8 ){
    case true:
        result1 = first > 8;
        break;

    case false:
        result1 = "second > 8";
        break;

    default:
        result1 = "none is greater than 8"
}

console.log("35", result1);

/*
function getPrice(category) {
    switch (true) {
        case (category >= 0 && category <= 10):
            console.log("Price is $10");
        case (category > 10 && category <= 20):
            console.log("Price is $20");
        case (category > 20 && category <= 30):
            console.log("Price is $30");
        case (category > 30):
            console.log("Price is $40");
        default:
            console.log("Category not recognized");
    }
}
    */

console.log("36", 5 + 6 * 3);
console.log("37", (5 + 6)*3);

let value = 5;
solution = (value === null) ? " is null" : " is not null";
console.log("38", value + solution);

solution = (value === undefined) ? " is undefined" : " is not undefined";
console.log("39", value + solution);

console.log("40", value += 3 * 5);

function myFunction (a, b){
    return Math.floor(a / b);
}

let z = myFunction(7, 2);
console.log("41", z);

console.log("42", 5 & 1); //ask for explanation
console.log("43", 1 | 5);
console.log("44", 1 ^ 5);
console.log("45", ~3);
console.log("46", 5 << 1);
console.log("47", 5 >> 1);
console.log("48", -5 >>> 1);



console.log("52", 12 ** 0.5);

function MultipleOf3or5(number){
    return number % 3 === 0 || number % 5 === 0;
}
console.log("53", MultipleOf3or5(9));

function cycleValue(index) {
    const cycleLength = 3; 
    return index % cycleLength;
}
console.log("54", cycleValue(0));  
console.log(cycleValue(1));  
console.log(cycleValue(2));  
console.log(cycleValue(3));  
console.log(cycleValue(4));  
console.log(cycleValue(5));

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("55", isLeapYear(2020));

function absoluteValue(num) {
    return num < 0 ? -num : num;
}


console.log("56", absoluteValue(5));

function max(a, b){

    if (a > b){
        return a;
    } else{
       return b;
    }
    
}

console.log("57", max(3,5));

function minimum(q, r, s){
    if (q < r && q < s){
        return q;
    }else if (r < q && r < s){
        return r;
    }else{
        return s;
    }

}

console.log("58", minimum(7,8,2));


const h = 10;
if (h > 1 && h < 10){
    console.log("60", h + " is withing the range");
}else{
    console.log("60", h + " is not within the range")
}

if (h > 1 || h < 10){
    console.log("61", h + " is withing the range");
}else{
    console.log("61", h + " is not within the range")
}

function lexicography(str1, str2){
    if (str1 > str2){
        console.log("62", str1 + " is lexicographically greater");

    }else if(str1 > str2){
            console.log("62", str2 + " is lexicographically greater");
    }else{
        console.log("62", "Both are equal")
    }
}
const lex = lexicography("ball", "ball");

function figure(fig){
    switch(fig % 8){
        case 1:
            console.log("65", "Sunday");
            break;
        case 2:
            console.log("65", "Monday");
            break;
        case 3:
            console.log("65", "Tuesday");
            break;
        case 4:
            console.log("65", "Wednesday");
            break;
        case 5:
            console.log("65", "Thursday");
            break;
        case 6:
            console.log("65", "Friday");
            break;
        case 7:
            console.log("65", "Saturday");
            break;
        default:
            console.log("65", "This day doesn't exist");
    }
}



const aday = figure(5);

figure('add')
figure('minus')
figure('divide')

function lastdigit(digit){ 
    console.log("66", "the last digit is " + Math.abs(digit % 10));
}
const dig = lastdigit(66);

function natural(n){
    if(n <= 0){
        return 0;
    }else{
        console.log("68", (n * (n + 1)) / 2);
    }

}

const naturalnum = natural(5);

function factorial(f) {
    // Handle the case where n is 0
    if (n === 0) {
        return 1;
    }
    
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    console.log("69", product);
}
const f = factorial(3);

function flip(truthiness){
    console.log("72", !truthiness);
}
let space = flip(true);

function primenum(prime){
    if (prime % 1 == 0 && prime % prime == 0 && prime % 2 != 0 && prime % 3 != 0 && prime != 1 || prime == 2 || prime == 3){
    console.log("73",true);
    }else{
        console.log("73",false);
    }
}

const pri = primenum(11);

function reverse(rev){
    console.log("75", ~rev);
}
const verse = reverse(5);

function twocomplement(two){
    console.log("76", ~(two) + 1);
}

const complement = twocomplement(5);

function median(m1, m2, m3){
    if((m1 >= m2 && m2 <= m3) || (m1 >= m3 && m1 <= m2)){
        console.log("78", m1 + " is the median");
    }else if((m2 >= m1 && m2 <= m3) || (m2 >= m3 && m2 <= m1)){
        console.log("78", m2 + " is the median");
    }else{
        console.log("78", m3 + " is the median");
    }
}

const middle = median(3, 2, 4);


function forL(n) {
    for(i = 0; i <= n; i++){
    console.log("This will work", i);
    }
}

forL(5);

function calc(action, c1, c2){
    switch(action){
        case "add":
            console.log(c1 + c2);
            break;
        case "minus":
            console.log(c1 - c2);
            break;
        case "multiply":
            console.log(c1 * c2);
            break;
        case "division":
            console.log(c1 / c2);
            break;
        case "modulus":
            console.log(c1 % c2);
        }
}

calc("add", 2, 5);