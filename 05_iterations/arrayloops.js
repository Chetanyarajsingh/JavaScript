// for of

// [1,2,3]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const str = 'Hello Greetings!!'
// for (const i of str) {
//     console.log(i);
    
// }

const map = new Map()
map.set('IN','India')
map.set('UK','United Kingdom')
map.set('NP','Nepal')
console.log(map);

for (const [key,value] of map) {
    console.log(`key = ${key} and value = ${value}`);
    
}

const myobj = {
    'Game1' : 'Valorant',
    'Game2' : 'BGMI'
}

// for (const [element] of myobj) {
//     console.log(element);
    
// } error : object not iteratableby this method

// using for in
for (const key in myobj) {
    // console.log(key);
    // console.log(myobj[key]);
    console.log(`Key = ${key} and value = ${myobj[key]}`);
}

const arr = ['h','e','l','l','o']
for (const j in arr) {
    console.log(j);
       
}