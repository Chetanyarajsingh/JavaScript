const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

// arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[4][2]);

// const newarr = arr1.concat(arr2)
// console.log(newarr);

// spread operator (...)
const allValue = [...arr1,...arr2]
// console.log(allValue);

const anotherArr = [1, 2, 3,[4, 5, 6], 7,[8, 9,[6, 7]], 10]

const usableArr = anotherArr.flat(Infinity)
// console.log(usableArr);




// console.log(Array.isArray("chetanya"));
// console.log(Array.from("chetanya")); //convert into array
// console.log(Array.from({name: "chetanya"})); 

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
