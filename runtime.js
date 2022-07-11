//*Step 1: Runtime Analysis*//

const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function


perf.start();                     // Starts timer
doublerAppend(tinyArray);

let tinyArrayAppend = perf.stop();  // Stops timer and save time results



// Try it with second function

perf.start();
doublerInsert(tinyArray);
let tinyArrayInsert = perf.stop();



perf.start();                     // Starts timer
doublerAppend(smallArray);
let smallArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function

perf.start();
doublerInsert(smallArray);
let smallArrayInsert = perf.stop();



perf.start();                     // Starts timer
doublerAppend(mediumArray);
let mediumArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function

perf.start();
doublerInsert(mediumArray);
let mediumArrayInsert = perf.stop();



perf.start();                     // Starts timer
doublerAppend(largeArray);
let largeArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function

perf.start();
doublerInsert(largeArray);
let largeArrayInsert = perf.stop();



perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let extraLargeArrayAppend = perf.stop();  // Stops timer and save time results


// Try it with second function

perf.start();
doublerInsert(extraLargeArray);
let extraLargeArrayInsert = perf.stop();


console.log(`tinyArray results`)
console.log(` It took append ${tinyArrayAppend.preciseWords} long to run the function`) 
console.log(`It took insert ${tinyArrayInsert.preciseWords} long to run the function`)
console.log(`smallArray results`)
console.log(` It took append ${smallArrayAppend.preciseWords} long to run the function`) 
console.log(`It took insert ${smallArrayInsert.preciseWords} long to run the function`)
console.log(`mediumArray results`)
console.log(` It took append ${mediumArrayAppend.preciseWords} long to run the function`) 
console.log(`It took insert ${mediumArrayInsert.preciseWords} long to run the function`)
console.log(`largeArray results`)
console.log(` It took append ${largeArrayAppend.preciseWords} long to run the function`) 
console.log(`It took insert ${largeArrayInsert.preciseWords} long to run the function`)
console.log(`extraLargeArray results`)
console.log(` It took append ${extraLargeArrayAppend.preciseWords} long to run the function`) 
console.log(`It took insert ${extraLargeArrayInsert.preciseWords} long to run the function`)



//*Step 2: Write Code*//

let nums = [1, 2, 3, -2]
num = true;

for(let i = 0; i < nums.length; i++) {
    num =+ +nums[i]
}

console.log(num);

//*2) Unique Characters*//

function unique(s) {
    for (let i = 0; i < s.lenght-1; i++) {
        if (s.charAt(i) == s.charAt(i + 1)) {
            return false;
        }
    }
    return true;
}

if (unique('Monday') == true) {
    document.write('String is Unique');
} else {
    document.write('String is not Unique');
}


//*3) Pangram Sentence*//

for (let i = 0; i < alphabet.lenght; i++) {
    if(lowercase.indexOf(alphabet[i]) === -1) {
        return "not pangram";
    }
}

//*4) Longest Word*//

function findLongestWordLenght(str) {
    let longest = '';
    let words = str.split('');
    for (let i = 0; i < words.lenght; i++) {
        if (longest.lenght < words[i].lenght) longest = words[i];
    }
    return longest.lenght;
}

findLongestWordLenght('The quick brown fox jumped over the lazy dog');
