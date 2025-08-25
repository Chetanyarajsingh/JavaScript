// for each

const arr = ['h','e','l','l','o']
// arr.forEach( function (item){
//     console.log(item);
    
// } )

// arr.forEach( (item)=>{
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }

// arr.forEach(printMe)

// arr.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// } )

const coding = [
    {
        language_name: 'javascript',
        language_fileextension: '.js'
    },

    {
        language_name: 'java',
        language_fileextension: '.java'
    },

    {
        language_name: 'python',
        language_fileextension: '.py'
    },

    {
        language_name: 'c++',
        language_fileextension: '.cpp'
    }
]

coding.forEach(  (item) =>{
    console.log(item.language_name);
    
} )