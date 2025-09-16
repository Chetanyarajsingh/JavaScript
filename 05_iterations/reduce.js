const myNum = [1,2,3,4]

// const myTotal = myNum.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0 )

const myTotal = myNum.reduce( (acc,currval) => acc + currval ,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Data Analytics course",
        price: 1499
    },
    {
        itemName: "Mobile dev course",
        price: 8999
    },
    {
        itemName: "Data Science course",
        price: 4999
    }
]

const pricetopay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(pricetopay);
