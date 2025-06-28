const accountId = 119601
let accountEmail="chetanya@google.com"
var accountPassword= "Chetanya@123"
accountCity="Ghaziabad"

let accountState

// accountId=2
//we use let over var because of issue of block scope and functional scope

accountEmail="crs@crs.com"
accountPassword="1234"
accountCity="Delhi"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
