// for

// for (let value = 0; value < 10; value++) {
//     console.log(value);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value: ${i}`)
//     for (let j = 0; j < 10; j++) {
//     console.log(`inner loop value: ${j}`)   
//     }
// }

// break and continue

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("5 detected");
        break;
    }
    console.log(`i: ${i}`);
    
}

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log("5 detected");
        continue;
    }
    console.log(`i: ${i}`);
    
}