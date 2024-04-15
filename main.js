//1.    Create a function that returns the sum of 2 numbers

function addNumber(a,b){
    return a+b;
}
let sum = addNumber(6,4);
console.log('The sum of 6 and 4 is'  + sum);


//2.    Create a function that returns the product of 2 numbers
function productOfNumber(c,d) {
    return c*d;
}
    let multiply = productOfNumber(2,5);
    console.log('The product of 2 and 5 is' + multiply);
    

//3.    Create a function that returns the difference of 2 numbers
function differOfNumber(e,f) {
    return e-f;
}
let sub = differOfNumber(10,5);
console.log('The difference between 10 and 5 is ' + sub);


//4.    Create a function that returns the division of 2 numbers. 
function divideNumber(k,l) {
    return k/l;
}
let divide = divideNumber(25,5);
console.log('The division of 25 and 5 is ' + divide);


//5.    Create a function that receives an array and returns the sum of all the elements inside that array.
function sumArray(arr) {
    let sum = 0;
    for (let x = 0; x<arr.length; x++) {
         sum += arr[x];
    }
    return sum;
}
const arr =[4,5,6,7,8,2];
console.log('The sum of array is ', sumArray(arr));
//6.    Create a function that receives an array and returns the greatest value inside that array
function greatArray(arrays) {
let maximuns = Math.max(...arrays);
return maximuns;
}
const arrays =[4,2,1,3,9];
console.log('The greatest element in array is ' +greatArray(arrays));
    

//7.    Create a function that receives an array and returns the smallest number from that array
function smallArray(arry) {
    let small = Math.min(...arry);
    return small;
}
let arry =[ 5,6,3,8,9];
console.log('The smallest element in array is ' +smallArray(arry));


//8.    Create a function that receives an array of numbers and returns the average of the numbers

function averageArray(obj) {
let average =0;
for (let b = 0; b < obj.length; b++) {
    average += obj[b];
    
}
return average / obj.length;

   // let average = Math.avg(obj);
   // return average;
}
let obj =[4,5,6,7,8,9];
console.log('The average of number in array is ' +averageArray(obj));


//9.    Create a function that combines two arrays into one single array. 
   //Use the following arrays:
  //  arrange = [a,b,c,d]
 //   array to = [e,f,g]
 function combindeArray(arrange,arrayTo){
 let combine = [];
    return  combine = arrange.concat(arrayTo);
 }
 let arrange =['a','b','c','d'];
 let arrayTo = ['e','f','g'];
 console.log('The combination of two   array is ' +combindeArray(arrange,arrayTo));

 
 //10.    Create a function that displays a pattern like this:
//* * * * *
//* * * * *
//* * * * *
//* * * * *

function pattern() {
    let part ='';
    for (let col = 1; col < 5; col++) {
        for (let row = 1; row <= 5; row++) {
          part += '*';
        }
        part += '\n';
    }
    return part ;
}
console.log(pattern());
//11.    Create a function that displays a pattern like this:
//1 1 1 1 
//1 1 1
//1 1 
//1


function numPttern() {
    let num = '';
     for (let b = 4; b >= 1; b--) {
        for (let a = 1; a <=b; a++){
         num += '1';
        }
        num += '\n';
        
    }
    
    return num;
}
console.log(numPttern());
//12.    Create a function that displays a pattern like this:
//1 1 1 1 
//1 1 1 0  
//1 1 0 0  
//1 0 0 0  

function zeroPattern() {
    let pat ='';
    for (let m = 1; m <=5 ; m++) {
     for (let n = 1; n <=5; n++) {
     if(m  === 1){
        pat += '1';
     }
     else if( n === 1){
        pat += '1';
     }
     else if (m ===5) {
        pat +='1';
     }
     else if(n ===2 || n ===3 || n===4){
        pat += '0';
     }
     else{
        pat += '1';
     }
  
     }
     pat += '\n';
  }
    return pat;
}
console.log(zeroPattern());


//14.    Create a function that displays a pattern like this:
      //1 
    //1
  //1 
//1

function displayPattern() {
  
    let hy ='';
    for(let r =1; r <= 5; r++){
      for(let p =1; p<=5; p++){
      if(p === 5- r +1){
          hy += '1';
      }
       else{
         hy +=' ';
       }
      }
      hy += '\n';
    }
    return hy;
      
  }
  console.log(displayPattern());


//15.    Given an array like this:
//var array = [1,3,4,3,7,8,0,12,19];    
//Create a function to reverse the order of the elements inside the given array.
function reverseArray(amy) {
    let rev = amy.reverse();
    return rev;
}
let amy =[1,3,4,3,7,8,0,12,19];
console.log('The reverse of array is ',reverseArray(amy));


//16.    Given an array like this: 
//var some numbers = [3,4,8,2,1,2,2,6,3,4];
//a.    Create a function to sort and arrange these elements of the array in ascending order.
function sortArray(someNumber) {
    let num =someNumber.sort((a,b) => a-b);
    return num;
}
let someNumber = [3,4,8,2,1,2,2,6,3,4];
console.log('Array in ascending order are ', sortArray(someNumber));

//b.    Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
let some =[3,4,8,2,1,2,2,6,3,4];
let firstThreeElement = some.slice(0,3);
let lastThreeElement = some.slice(7,10);
let combineElement = firstThreeElement.concat(lastThreeElement);
    console.log('The first and last element in array are  ',combineElement);

//c.    From the same sorted array, also display the first 3 numbers.
let sortFirst = sortArray(someNumber).slice(0,3);
console.log('sort first element ' ,sortFirst);

//17.    Create a function that determines the age classification of people:
//Bellow are classifications according to specific conditions:
 
    //MIMICRY:             0 - 12
    //SELF-DISCOVERY:     13 - 19
    //COMMITMENT:         20 - 45
    //LEGACY:            46 - Above

    function classAge(age) {
        
        if(age >=0 && age <=12){
            return 'MIMICRY';
        }
        else if (age >=13 && age <=19) {
           return 'SELF-DISCOVERY';
        }
        else if (age >=20 && age<=45) {
            return 'COMMITMENT';
        } 
        else if( age >= 46) {
            return 'LEGACY';
        }
        else{
            return 'Your age is not classfied';
        }
    }
     let ageNumber =classAge(-2);
    console.log('Your Classification is :' , ageNumber);

    //18.    Create a function that calculates the BMI of a person and returns the specific classification of a person according to the 
    //height and weight provided by a user.
   // How to calculate Body Mass Index:
  //  BMI = weight(kg) / (height(m) x height(m))
  const person=(weight,height) =>{
    return weight / (height*height);
  }
  let MBI =person(49,1.75);
  console.log('The Body Mass Index of you is ' ,MBI ,'Kg/m');

//19.    Create a function that counts the number of characters that make up a string.
//N.B: Add conditions that will make sure that spaces will not be counted in the number of characters.
//Example:
//For the string: “Hello World”
//The number of characters is 10

const counts=(amr)=>{
    amr.trim();
    let amf =[...amr];

    let fils = amf.filter((char)=> {
        return char !== ' ';
    });
    return fils.length;
}
console.log('The number of character is ',counts('you are good'));

//20.    Create a function that displays an even number between 1 and 100
const evenNumber=()  =>{
    let numbers =[];
    for (let j = 1; j <=100; j++) {
        if (j %2 === 0) {
       numbers.push(j);
        }
        
    }
    return numbers;
}
console.log('The even number from 1 to 100 are ',evenNumber());

//21.    Write a function that calculates the square of a number.
const squareNumber=(num)=>{
return Math.sqrt(num);
}
let ange=squareNumber(72);
console.log(`Squareroot of your entered number is`,ange);

//22.    Write a function that checks if a number is even.
function checkEven(num) {
    if(num % 2===0){
        return `${num} is even number`;
    }
    else{
        return `${num} is not even number`;
    }
}
let yamur = checkEven(44);
console.log(yamur);

//23.    Write a function that checks if a number is odd.
const checkOdd=(celine) =>{
    if(celine%2 !==0){
        return `${celine}  is odd number`;
    }
    else{
        return `${celine} is not odd number`;
    }
}
let bon = checkOdd(3);
console.log(bon);

//24.    Write a function that returns the maximum of two numbers.
const maxNumber=(x,y) =>{
    if(x>y){
        return `${x} Is maximum number`;
    }
    else if(y>x){
        return `${y} Is maximum number`;
    }
    else{
        return `${x} and ${y}  are equal`;
    }
}
let mxNum = maxNumber(9,4);
console.log(mxNum);

//25.    Write a function that returns the minimum of two numbers.
const minNum=(w,z) =>{
    if(w<z){
        return `${w} is minimum number `;
    }
    else if(z<w){
        return `${z} is minimum number`;
    }
    else{
        return `${w} and ${z} are equal`;
    }
}
let mnNum = minNum(3,3);
console.log(mnNum);

//26.    Write a function that calculates the factorial of a number.
const factorialNumber=(fact) =>{
    if(fact ===0){
        return 1;
    }
    return fact * factorialNumber(fact - 1);
    
}
let factorial = factorialNumber(5);
console.log(`The factorial is `,factorial);

//27.    Write a function that reverses a string.
function revString(h) {
  return h.split('').reverse().join('');
    }
let bbc = revString('Hello World!');
console.log(bbc);

//28.    Write a function that checks if a string is a palindrome.
 const checkString=(str) =>{
    if(typeof str ==='string'){
        return `${str} is string`;
    }
    else{
        return `${str} is not string`;
    }
 }
console.log( checkString(true));

//29.    Create a function that displays odd numbers between 1 and 100
const displayOdd=() =>{
    let odds=[];
    for (let u =1; u<=100; u++){
        if (u % 2!== 0) {
          odds.push(u);
    }
}
    return odds;
}
console.log(displayOdd());

//30.    Create a function that displays multiples of 5
const multiplesNum=() =>{
    let o = 5;
    let multiples =[];
    for (let d = 1; d<=10; d++){
multiples.push(`${d} * ${o} =${d*o}`);
    }
    return multiples;
}
console.log(multiplesNum().join('\n'));

//31.    Create a function that returns the square root of a given number.
const returnSquare=(sqr)=>{
    let mn = Math.sqrt(sqr);
    return mn;
}
let inputSrq = returnSquare(30);
console.log(`The squareroot  is`,inputSrq);

//32.    Create a function that receives two numbers and returns the bigger number.
const bigNum=(num1,num2)=>{
    if(num1>num2){
        return `${num1} is bigger number`;
    }
    else if(num2>num1){
        return `${num2} is bigger number`;
    }
}
let bigger = bigNum(23,43);
console.log(bigger);

//33.    Create a function that receives a string and changes it into capital letters.
const capitalString=(cap)=>{
let capStr = cap.toUpperCase();
return capStr;
}
let banger = capitalString('hello world');
console.log(banger);

//34.    Create a function called “stringModifier”. This function allows a user to provide a string, 
//and then provide the position they want to modify, and a character to replace the modified one from the string. T
//his function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.
 const stringModifier=(k,l,t)=>{
 let modif = k.split('');
 modif[l]=t;
 let modifArr= modif.join('');
 return modifArr;
 }
 let original='ange Tesi';
 let mango =stringModifier(original,0,'A');
 console.log(mango);

 //35.    Write a function that counts the number of vowels in a string.
 const countString=(strg)=>{
    let vowels =0;
    let turnToStr = strg.toString();
    for (let bm = 0; bm < strg.length; bm++) {
    if(turnToStr.charAt(bm)==='u'|| turnToStr.charAt(bm)==='o'||turnToStr.charAt(bm)==='a'||turnToStr.charAt(bm)==='e' ||turnToStr.charAt(bm)==='i' )
        vowels += 1;
    }
return vowels;
 }
 let bgm = countString('We are going to landon');
 console.log('The number of vowels in this string are',bgm);

//36.    Write a function that counts the number of consonants in a string.
function countConsonants(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let count = 0;
    
    for (let gh= 0; gh< str.length; gh++) {
        if (consonants.includes(str[gh])) {
            count++;
        }
    }
    
    return count;
}

const inputString = 'Hello World';
const consonantCount = countConsonants(inputString);
console.log(`The number of consonants in "${inputString}" is ${consonantCount}`);

//37.    Write a function that finds the index of a given character in a string.
function findCharacterIndex(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
  
    return -1;
}
const inpString = 'Hello World';
const charToFind = 'o';
const charIndex = findCharacterIndex(inpString, charToFind);
console.log(charIndex);
//38.    Write a function that removes duplicates from an array.

const removeDuplicate=(dup)=>{
    let rem =[...new Set(dup)];
    return rem;
}
let dup =[1,2,3,5,3,7,6,4,2,1,5];
console.log(removeDuplicate(dup));

//39.    Write a function that checks if a given value is present in an array.
function isValuePresent(arr, value) {
    return arr.includes(value);
}


const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;
if (isValuePresent(numbers, valueToCheck)) {
    console.log(`${valueToCheck} is present in the array.`);
} else {
    console.log(`${valueToCheck} is not present in the array.`);
}
//40.    Write a function that squares each element of an array.
function squareArrayElements(arr) {
    return arr.map(element => element * element);
}


const numbe= [1, 2, 3, 4, 5];
const squaredNumbers = squareArrayElements(numbe);
console.log("Squared array:", squaredNumbers);

//41.    Write a function that returns the first n elements of an array.
function getFirstNElements(arr, n) {
    return arr.slice(0, n);
}


const alice= [1, 2, 3, 4, 5];
const n = 3;
const firstNElements = getFirstNElements(alice, n);
console.log(`First ${n} elements:`, firstNElements);

//42.    Write a function that removes the last element from an array.
function removeLastElement(abi){
  abi.pop();
  return abi;
}
const abi =[1,2,3,4,5,6];
console.log(removeLastElement(abi));

//43.    Write a function that sorts an array of numbers in ascending order.
function sortArrays(soso){
    let sol =soso.sort((a,b) => a-b);
    return soso;
}
 const soso =[6,8,9,3,2,6];
 console.log(sortArrays(soso));

//44.    Write a function that checks if all elements in an array are positive.
 const positivdeNumber=(posi)=>{
    if(posi >=0){
        return 'The number is positive';
    }
    else {
        return 'The number is not posistive';
    }
 }
 let positive = positivdeNumber(-43);
 console.log(positive);

//45.    Write a function that calculates the sum of the even numbers in an array.
const evenArray=(sum)=>{
    let sums = 0;
    for( let i = 0;i<= sum.length; i++){
    if(sum[i] % 2===0){
        sums += sum[i];
    }
}
    return sums;
}
let evenSum= evenArray([1,2,3,4,5,6]);
console.log(evenSum);

//46.    Write a function that converts an array of strings to uppercase.
 const convertArray=(strArray)=>{
    let covertString = strArray.map(index => index.toUpperCase());
    return covertString;
 }
 let remy = convertArray(['ange','alice','amaya','ashley']);
 console.log(remy);

//47.    Write a function that generates a random number between a given range.
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const minRange = 1;
const maxRange = 10;
const randomNumber = generateRandomNumber(minRange, maxRange);
console.log("Random number between", minRange, "and", maxRange, ":", randomNumber);

//48.    Write a function that returns the reverse of an array.
const revArray=(odi)=>{
    let gabby = odi.reverse();
    return gabby;
}
 let kami =revArray([1,2,3,4,5,6]);
console.log(kami);

//49.    Write a function that calculates the Fibonacci sequence up to n numbers.
function fibonacciSequence(n) {
    let fibonacciNumbers = [0, 1]; 
    
  
    for (let i = 2; i < n; i++) {
        let nextFibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        fibonacciNumbers.push(nextFibonacciNumber);
    }
    
    return fibonacciNumbers;
}


const ny = 10; 
const fibonacciSequenceResult = fibonacciSequence(n);
console.log("Fibonacci sequence up to", n, "numbers:", fibonacciSequenceResult);

//50.    Write a function that checks if an array is sorted in ascending order.
function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; 
        }
    }
    return true; 
}

const sortedArray = [1, 2, 3, 4, 5];
console.log("Is the array sorted in ascending order?", isSortedAscending(sortedArray));

const unsortedArray = [5, 3, 1, 4, 2];
console.log("Is the array sorted in ascending order?", isSortedAscending(unsortedArray)); 

//51.    Write a function that filters out negative numbers from an array.
function filterNegative(fil) {
    let rab = fil.filter(fil => fil <=0)
        return rab;
    }
let fils = filterNegative([1,-2,-5,-7,2,3]);
console.log(fils);

//52.    Write a function that calculates the square root of a number.
const calculate=(root)=>{
    let jaja = Math.sqrt(root);
    return jaja;
}
console.log('The squareroot is',calculate(81));

//53.    Write a function that finds the median of an array of numbers.
function findMedian(arr) {
   const n = arr.length;
    
    if (n % 2 === 0) {
       
        const middleIndex1 = n / 2 - 1;
        const middleIndex2 = n / 2;
        return (arr[middleIndex1] + arr[middleIndex2]) / 2;
    } else {
       
        const middleIndex = Math.floor(n / 2);
        return arr[middleIndex];
    }
}

const numbers1 = [1, 3, 2, 5, 4];
console.log("Median:", findMedian(numbers1));

//54.    Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
  const words = sentence.split(' ');
     const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
     const capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence;
}
const sentence = "this is a sentence";
console.log("Capitalized sentence:", capitalizeFirstLetter(sentence));

//55.    Write a function that checks if a given year is a leap year.
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        return  `This year ${year} it's a leap year`;
    }
    return `This year ${year} it's not a leap year`;
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2021));

//56.    Write a function that finds the intersection of two arrays.
function intersection(arr1, arr2) {
    const intersect = [];
    for (let element of arr1) {
  
        if (arr2.includes(element) && !intersect.includes(element)) {
            intersect.push(element);
        }
    }
    
    return intersect;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log("Intersection:", intersection(array1, array2));

//57.    Write a function that checks if a number is prime.
function isPrime(numbery) {
    if (numbery < 2) {
        return false;
    }
    for (let iy = 2; iy <= Math.sqrt(numbery); iy++) {
        if (numbery% iy === 0) {
            return  `${numbery} it's not prime`;
        }
    }
    
    return `${numbery} it's prime`;
}
console.log(isPrime(5)); 
console.log(isPrime(12)); 

//58.    Write a function that returns the power of a number (base, exponent).
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    let result = base;
    for (let ir = 1; ir < exponent; ir++) {
        result *= base;
    }
 return result;
}

console.log(power(2, 3));
console.log(power(5, 2)); 

//59.    Write a function that calculates the area of a rectangle.
function rectangleArea(wid,hei) {
    return wid*hei;
}
let gag =rectangleArea(6,7);
console.log('The area of rectangle is',gag);

//60.    Write a function that calculates the perimeter of a rectangle.
function rectanglePerimeter(widt,heig) {
    return 2*(widt+heig);
}
let gage =rectanglePerimeter(6,7);
console.log('The area of rectangle is',gage);

//61.    Write a function that checks if a given string contains only digits.
function containsOnlyDigits(str) {
    const chars = str.split('');
    for (let char of chars) {
    
        if (char < '0' || char > '9') {
            return'String are not only digits';
        }
    }
     return 'String are only digits';
}
console.log(containsOnlyDigits("123"));

//62.    Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    let rr =sentence.split(' ');
      let words = rr.filter((word)=> word !==' ');
      return words.length;
   }
   const sentences = "the learning is good";
   console.log("Number of words:", countWords(sentences));

//63.    Write a function that converts a temperature from Celsius to Fahrenheit.
function celsiusToFah(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
 return fahrenheit;
}
const celsiusTemp = 25;
console.log(`${celsiusTemp}Celsius is equal to ${celsiusToFah(celsiusTemp)}Fahrenheit`);

//64.    Write a function that generates a pyramid pattern of a given height.function generatePyramid(height) {
    // Iterate over each row of the pyramid
    function Pyramid(heights) {
        let rowy ='';
        for (let it = 1; it<= heights; it++) {
        
            for (let jj = 1; jj <= heights- it; jj++) {
                rowy += ' ';
            }
            for (let kb = 1; kb <= 2 * it - 1; kb++) {
                rowy+= '*';
            }
            rowy +='\n';
        }
            console.log(rowy); 
        
    }
    Pyramid(5);

    //65.    Switch Case:
//.    Calculator Switch:
//a.Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
function calculator(num4, num5, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num4+ num5;
            break;
        case '-':
            result = num4 - num5;
            break;
        case '*':
            result = num4* num5;
            break;
        case '/':
            if (num5 !== 0) {
                result = num4 / num5;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}
console.log(calculator(5, 3, '+')); 

//b.    Day of Week:
//Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
function getDay(dayNum) {
    let dayName;
    switch (dayNum) {

        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
                    case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}
console.log(getDay(1));


//c.    Grade System:
//Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.
function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }
    return grade;
}
console.log(getGrade(95));

//d.    Traffic Light:
//Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).
function trafficLight(colorCode) {
    let color;
    switch (colorCode) {
        case 1:
            color = 'Red';
            break;
        case 2:
            color = 'Yellow';
            break;
        case 3:
            color = 'Green';
            break;
        default:
            color = 'Invalid input';
    }
    return color;
}
console.log(trafficLight(1));

//e.    Month Name:
//Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.
function getMonth(monthNumber) {
    let monthName;
    switch (monthNumber) {
        case 1:
            monthName = 'January';
            break;
        case 2:
            monthName = 'February';
            break;
        case 3:
            monthName = 'March';
            break;
        case 4:
            monthName = 'April';
            break;
        case 5:
            monthName = 'May';
            break;
        case 6:
            monthName = 'June';
            break;
        case 7:
            monthName = 'July';
            break;
        case 8:
            monthName = 'August';
            break;
        case 9:
            monthName = 'September';
            break;
        case 10:
            monthName = 'October';
            break;
        case 11:
            monthName = 'November';
            break;
        case 12:
            monthName = 'December';
            break;
        default:
            monthName = 'Invalid month number';
    }
    return monthName;
}
console.log(getMonth(1)); 

//f.    Simple Menu:
//Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.

//g.    Currency Converter:
function convertCurrency(amounts, sourceCurrency, targetCurrency) {
    let convertedAmount;
    const conversionRates = {
        USD: 1,    
        EUR: 0.85,
        GBP: 0.75, 
        JPY: 110,  
        AUD: 1.35, 
    };
    let amountInUSD = amounts / conversionRates[sourceCurrency];
    switch (targetCurrency) {
        case 'USD':
            convertedAmount = amounts;
            break;
        case 'EUR':
        case 'GBP':
        case 'JPY':
        case 'AUD':
            convertedAmount = amountInUSD * conversionRates[targetCurrency];
            break;
        default:
            convertedAmount = "Unsupported target currency";
    }

    return convertedAmount;
}
let amounts = 100;
let sourceCurrency = 'USD';
let targetCurrency = 'EUR';
console.log(`Converted amount: ${convertCurrency(amounts, sourceCurrency, targetCurrency)} ${targetCurrency}`);
//h.    Shape Area:
//Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.
const circles=(shape, side, height, base, radius)=>{
    let area;
    
     switch (shape) {
        case 'circle':
     area= Math.PI * radius * radius ;
            break;
            case 'square':
               area=   side * side ;
                       break;
                       case 'triangle':
                        area=  1/2*(base * height) ;
                               break;
        default:
            area = 'Invalid shape';
            break;
     }
     return area;
    }
    let shape='circle';
     let kamis =circles('square',4,5,7,2,9);
    console.log(`Area of ${shape} shape is`,kamis);
//i.  ////   Season Detector://///
function getSeason(month) {
    switch (month) {
        case "January":
        case "February":
        case "December":
            return "Winter";
        case "March":
        case "April":
        case "May":
            return "Spring";
        case "June":
        case "July":
        case "August":
            return "Summer";
        case "September":
        case "October":
        case "November":
            return "Fall";
        default:
            return "Invalid month";
    }
}

// Example usage:
const month = prompt("Enter a month:"); // You can change this to any method of getting input you prefer
const season = getSeason(month);
console.log(`${month} is in ${season}.`);

