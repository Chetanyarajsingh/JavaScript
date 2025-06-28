// constructor - singleton
// Object.create()

// object literals

const mySym = Symbol("Key1") 
const jsUser = {
    name: "chetanya",
    "full name": "Chetanya Raj Singh",
    [mySym]: "myKey1", //symbol
    age: 21,
    location: "ghaziabad",
    email: "chetanya@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Friday"]
}
// console.log(jsUser.name);
// console.log(jsUser["email"]);

// console.log(jsUser[mySym]);


jsUser.email = "chetanya_raj@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "nochanges@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Namaste!! User");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Namaste!! User, ${this.name}`);
}

console.log(jsUser.greetingTwo());
