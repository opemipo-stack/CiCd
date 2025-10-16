// Data is the collection of information or details about a particular object or figure.
// Structure is how you save (or arrange),  format and process the data.
// Algorithm is a set of instruction or a step by step rule on how to solve a problem

// write an algorithm that  adds two to every number in an array

import {performance} from "perf_hooks"

const num = [3, 7, 12, 6, 34, 19]


async function addTwo(sum) {
    for (let i = 0; i < num.length; i++) {
        num[i] += sum
    }
    return num
}

async function fetchUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
     return await res.json()
    
}
fetchUser()
async function dotThen(){
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data) => {
        return data;
    })
}

console.log(addTwo(2));

if (import.meta.url === `file://${process.argv[1]}.js`) {
    const t0 = performance.now()
    addTwo().then(()=> 
    console.log(`time ${((performance.now() - t0) / 1000).toFixed(4)}s`)
    )
    fetchUser().then(()=> 
        console.log(`time ${((performance.now() - t0) / 1000).toFixed(4)}s => without then`)
        )
    dotThen().then(()=> 
            console.log(`time ${((performance.now() - t0) / 1000).toFixed(4)}s => dot then`)
            )
}


function isPalindrome(word) {
   let reversed_word = ""
   let i = word.length - 1
   while (i >= 0){
    if (word[i] == " ") {
        i--
        continue;
    }
    reversed_word += word[i]
    i--
   }
   console.log(reversed_word);
   return word.replaceAll(" ", "").toLowerCase().trim() == reversed_word.toLowerCase()
   
  }
    console.log(isPalindrome("mother"));
    
function multiplication(number) {
    let star = ""
    for (let index = 0; index < number; index++) {
        star += "*"
        console.log(star);
        }
        
    }
    console.log(multiplication(10)); 

// min
// max
// sort in ascending and descending order
// lexographical order
// should indicate if there are two of the same name ion the array and it shoulkd say how many times it appears

function nameChecker(names) {
    for (let i = 0; i < names.length; i++) {
        let count = 0
        for (let j = 0; j < names.length; j++) {
            if (names[i] === names[j]) {
                count++;
            }
            
        }
        if (count > 1) {
            return "The name '" + names[i] + "' appears " + count + " times in the array.";
          }
}
// return "no duplicates found"


let minName = names[0]
let maxName = names[0]

    for (let i = 0; i < names.length; i++) {
        if (names[i].length < minName.length) {
            minName = names[i]
        }
        if (names[i].length > maxName.length) {
            maxName = names[i]
        }
        
    }
    return "minimum name is" + " " + minName + " " +
    "maximum name is" + " " + maxName

    
}
let mynames = ["daniel", "opemipo", "afolabi", "precious"]

console.log(nameChecker(mynames));

// findName()
// MaxLength()
// minLength()






// The Big O => checking for time complexity and space complexity

