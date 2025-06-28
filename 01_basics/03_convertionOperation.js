let score="33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)




let score2="33abc"
let valueInNumber2 = Number(score2)

// console.log(typeof valueInNumber2)
// console.log(valueInNumber2);




let score3=null
let valueInNumber3 = Number(score3)

// console.log(typeof valueInNumber3)
// console.log(valueInNumber3);



let score4=undefined
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4)
// console.log(valueInNumber4);




// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0


let loggedIn = 0
let isloggedIn = Boolean(loggedIn)

// console.log(isloggedIn);
// 1 -> true, 0-> false
// ""  -> false, "abcd" -> true


let someNumber = 76
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);



// ---------------------------operations-----------------------------

let value = 5
let negval = -value

// console.log(negval);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(2 % 2);

let str1 = "hello"
let str2 = " world"

// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log(true);
// console.log(+true);
// console.log(+"");

let gamecounter=100
gamecounter++
console.log(gamecounter);