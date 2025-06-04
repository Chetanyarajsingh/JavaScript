const user = {
    username: "chetanya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to the website!`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function fun(){
//     let username = "chetanya"
//     console.log(this.username);
// }

// fun()



const fun = () => {
    let username = "chetanya"
    console.log(this);
}

// fun()



// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "chetanya"})

console.log(addTwo(4, 4))

// const myArr = [1, 2, 3, 4]

// myArr.forEach(function(){})