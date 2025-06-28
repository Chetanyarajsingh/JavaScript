// Immediately Invoked Function Expressions (IIFE)

(function fun(){
    //named iife
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB CONNECTED ${name}`);
})("chetanya");