var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    c = 30
    // console.log("inner a: ",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);
 
//var is scope free which is not good and should not be used

// console.log("Outer a: ",a);

function one(){
    const username = "chetanya"

    function two(){
        const website = "yt.com"
        console.log(username);        
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "chetanya"
    if(username == "chetanya"){
        const website = " yt.com"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// -----------------------------interesting-------------------------------

console.log(addOne(5));
function addOne(num){
    return num + 1
}
// function

// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// expression