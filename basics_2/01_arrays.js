const arr = [0,1,2,3,4,5]

// console.log(arr[0]);

const arr2 = new Array(1, 2, 3, 4)
// console.log(arr2[1]);

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));
// console.log(arr.indexOf(4));

const newArr = arr.join()

// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice and Splice

console.log("A ",arr);

const myn1 = arr.slice(1,5)
console.log(myn1);

console.log("B ",arr);

const myn2 = arr.splice(1,5)
console.log("C ",arr);
console.log(myn2);