const name = "chetanya"
const repoName = "JavaScript"
const age = 20

// console.log(name + repoName)
// console.log(name + " " + repoName)
// console.log(name + age)

console.log(`My name is ${name}, my age is ${age} and my repo name is ${repoName}`)
// using backticks (``)


const gameName = new String("chetanya")
// one more way to declare a string by using object and also have many methods to deal string

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// substring ignores negative values while slice entertains

const spaceString = "    chetanya     "
console.log(spaceString);
console.log(spaceString.trim());

const url = "http://chetanya_raj@gmail.com/chetanya%20raj"
console.log(url.replace('%20','-'))

console.log(url.includes('chetanya'));
console.log(url.includes('hello'));

const name2 = "chetanya-raj-singh"
console.log(name2.split('-'));
