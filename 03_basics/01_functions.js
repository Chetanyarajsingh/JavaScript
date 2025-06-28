function sayMyname(){
    console.log("C");
    console.log("H");
    console.log("E");
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
}

// sayMyname()

// function addTwoNums(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNums(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNums(2, 2)
// console.log(`Result: ${result}`);
//log inside a function only prints the values not return the value


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Chetanya"))
// console.log(loginUserMessage())

function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(200, 400, 500));



const user = {
    username: "Chetanya",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is: ${anyObject.username} and price is: ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Chetanya_raj",
//     price: 500
// })

const arr = [200, 400, 500]

function returnSecondValueArray(getArray){
    return getArray[1]
}

// console.log(returnSecondValueArray(arr));
console.log(returnSecondValueArray([100, 200, 1000, 2000]));