//if
const isUserLoggedIn = true

if (isUserLoggedIn){

}

// comparisons => <, >, <=, >=, ==, !=, === (also check datatype with value), !==

const score = 300

if(score > 100){
    let power = "fly"
    // console.log(`User Power: ${power}`);
}

const balance = 1000

// if(balance > 500) console.log("test passed"), console.log("test 2"); //Not suggested to use

const isLoggedIn = true
const debitcard = true
const isLoggedInfromGoogle = false
const isLoggedInfromEmail = true

// if(isLoggedIn && debitcard){
//     console.log("Allowed to buy course");
// }

if(isLoggedInfromGoogle || isLoggedInfromEmail){
    console.log("User logged In");
}
