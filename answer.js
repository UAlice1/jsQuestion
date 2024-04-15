///// Create a function that returns the sum of 2 numbers///
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(5, 10);
console.log(result); // This will output 15

////////Create a function that returns the product of 2 numbers//////
function multiply(one, two) {
    return one * two;
}

let resul = multiply(6, 9);
console.log(resul); // This will output 50
/////////  Create a function that receives an array and returns the smallest number from that array///
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        return undefined; // return undefined if array is empty
    }

    let smallest = arr[0]; // initialize smallest to the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; // update smallest if current element is smaller
        }
    }

    return smallest;
}

// Example usage:
const numbers = [3, 7, 2, 9, 1];
console.log(findSmallestNumber(numbers)); // Output: 1


////////  Create a function that returns the difference of 2 numbers/////
function subtract(num1, num2) {
    return num1 - num2;
}
let resu = subtract(10, 5);
console.log(resu); // This will output 5
////////Create a function that returns the division of 2 numbers. //////
 function division(div1,div2){
    return div1 % div2;
 }
 let divi=division(10,5)
 console.log(divi);
/////////Create a function that receives an array and returns the greatest value inside that array//////////////
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); // Output will be 15

//////Create a function that receives an array and returns the greatest value inside that array///////
function findGreatestValue(array) {
    if (array.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    return Math.max(...array);
}

// Example usage:
const array1 = [1, 5, 9, 3, 7];
console.log(findGreatestValue(array1)); // Output: 9

const array2 = [-10, -5, -8, -15];
console.log(findGreatestValue(array2)); // Output: -5

const emptyArray = [];
console.log(findGreatestValue(emptyArray)); // Output: undefined

////////////////// Create a function that receives an array of numbers and returns the average of the numbers///
function calculateAverage(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return 0;
    }
    
    // Calculate the sum of all numbers in the array
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    // Calculate the average
    const average = sum / numbers.length;
    
    return average;
}

// Example usage:
const numbersArray = [4, 8, 12, 16, 20];
const average = calculateAverage(numbersArray);
console.log("Average:", average);

//////Create a function that combines two arrays into one single array.//// 

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Example usage:
var arrange = ['a', 'b', 'c', 'd'];
var arrayTo = ['e', 'f', 'g'];

var combinedArray = combineArrays(arrange, arrayTo);
console.log(combinedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']

///  Create a function that displays a pattern like this:////
function displayPattern(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            pattern += ' ';
        }
        // Add asterisks
        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern += '*';
        }
        pattern += '\n'; // Move to the next line
    }
    console.log(pattern);
}

// Call the function with the number of rows you want
displayPattern(5);
//////Create a function that displays a pattern like this:////
function displayPattern(rows) {
    // Loop through each row
    for (let i = 1; i <= rows; i++) {
        let pattern = '';

        // Loop to add spaces
        for (let j = 1; j <= rows - i; j++) {
            pattern += ' ';
        }

        // Loop to add stars
        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern += '*';
        }

        // Print the pattern for this row
        console.log(pattern);
    }
}

// Call the function with the number of rows you want
displayPattern(5);
///////   Create a function that displays a pattern like this:///
function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            if (j >= cols - i - 1) {
                row += '1 ';
            } else {
                row += '0 ';
            }
        }
        console.log(row);
    }
}

// Call the function with desired number of rows and columns
displayPattern(4, 4);

//// Create a function that displays a pattern like this:////
function displayPattern(size) {
    for (let i = 0; i < size; i++) {
        let pattern = '';
        for (let j = 0; j < size; j++) {
            if (j === size - i - 1) {
                pattern += '1';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
}

// Example usage:
displayPattern(4);
////////




























    
