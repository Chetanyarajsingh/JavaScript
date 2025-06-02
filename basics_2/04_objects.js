const appUser = new Object()

// console.log(appUser);

appUser.id = "101a"
appUser.name = "Chetanya"
appUser.isLoggedIn = false

// console.log(appUser);

const regularUser = {
    email: "anonymous@gmail.com",
    fullName: {
        firstName: "Chetanya",
        middleName: "Raj",
        lastName: "Singh"
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} 
//same problem as array object inside object

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(appUser);
// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty("name"));

// destructuring
const course = {
    courseName: "JavaScript",
    coursePrice: "999",
    courseInstructor: "XYZ"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// API

// JSON
// {
//     "name": "Chetanya",
//     "courseName": "JS",
//     "price": "999"
// }

// [
//     {},
//     {},
//     {}
// ]