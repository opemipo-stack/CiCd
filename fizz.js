// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


function fizzbuzz(n) {
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log("fizzbuzz");
            continue
            
        } else if (index % 5 === 0) {
            console.log("buzz");
            continue
            
        } else if (index % 3 === 0) {
            console.log("fizz");
            continue
        }
        console.log(index);
                
    }
}

fizzbuzz(100)


function capit(sentence) {
    let new_sentence = sentence.split(" ")
    for (let index = 0; index < new_sentence.length; index++) {
        const element = new_sentence[index];
        new_sentence[index] = element[0].toUpperCase() + element.substr(1); // or slice
        
        
        // element[0].toUpperCase()
        // console.log(element);  
    }
    return new_sentence.join(" ")
}
console.log(capit("do my assignment"));

// array chunks

function chunkingArr(arr, div) {
    // [1,2,3,4,5,6,7,8,9] => arr
    // 3
    //out => [[1,2,3], [4,5,6], [7,8,9]]
    let chunked = []
    for (let i = 0; i < arr.length; i += div) {
        let divided = arr.slice(i, i + div)
        chunked.push(divided)

        
    }
    return chunked
}

console.log(chunkingArr( [1,2,3,4,5,6,7,8,9], 3));

// any number in input must print its word in the div underneath.