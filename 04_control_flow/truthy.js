// const userEmail = "crs@chetanya.ai"
const userEmail = []

if (userEmail) {
    console.log("User Email available");
    
}
else{
    console.log("Doesn't have user email");
    
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 10 ?? 5
// val1= null ?? 10
// val1= undefined ?? 15 

// console.log(val1);

// terniary operator
// condition ? true : false

const iceteaprice = 100;
iceteaprice <=80 ? console.log("less than 80") : console.log("more than 80")
 
