const myNum = [1,2,3,4,5]

// const newNums = myNum.map( (num) => num+10 )

const newNums = myNum
                .map( (num) => num * 10 )
                .map( (num) =>num + 1 )
                .filter( (num) => num >= 40 )
console.log(newNums);
