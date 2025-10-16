// the O of n
// the execution time  of the algo grows linearly in proportion to the size of the input data (n)
// i.e we have an array of length 5, it takes faste to execute info than an array of length 1000
let names = ["femi", "tunde", "kunle"]

function searchName(name) {
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if (element === name) {
            return name;
        }
        
    }
}
console.log(searchName("tunde"));

// the O of 1
// also known as constant time, signifies that the execution time of an algo remains constant regardless of the input


// the O of n^2
//indicates that the algo execution time grows quadratically with the size of the input data

for (let i = 0; i < 10; i++) {
    // console.log(i);
    
    for (let j = 0; j < 10; j++) {
        console.log(`finding pairs: ${i}: ${j}`);
        
       
    }
    
}
