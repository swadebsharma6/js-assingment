/*-
problem: 1
I will be given a function called mindGame("which will take a positive number as input.")
Now, You have to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.
-*/ 
function mindGame(num){
    if(typeof num !== 'number'){
        return "Provide valid input"
    }
    const multiPlication = number * 3;
    const additionResult = multiPlication + 10;
    const divineResult = additionResult / 2;
    const subtractResult = divineResult - 5;
    return subtractResult;
}
let number = 50;
const result = mindGame(number);
console.log(result);


/*--
problem: 2
I will be given a function called evenOdd(). It will take a string as input.
Now i have to give the output based on the total number of characters in your task: String. Output will be 'even' or 'odd'. Sample Input & Output:
--*/ 

function evenOdd(str){
    if(typeof str !== 'string'){
        return "please Provide string input"
    }
    const strLength = str.length;
    
    if(strLength % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
let strName =  'Phero';
const finalResult = evenOdd(strName);
console.log(finalResult);


/*--
problem: 3.
I will be given a function called “isLGSeven()”. It will take a number as input.
I have to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input.
--*/ 

function isLGSeven(num1){
    if(typeof num1 !== 'number'){
        return "please Provide number input"
    }
    const differOfSeven = num1 - 7;
    if(differOfSeven < 7){
        return differOfSeven;
    }
    else if(differOfSeven > 7 ) {
        const doubleTwo = num1 * 2;
        return doubleTwo;
    }
    else{ return '---Do not Know---'}
}
let number1 = 6;
const isGreaterThan = isLGSeven(number1);
console.log(isGreaterThan);


/*-
problem: 4
You will be given a function called findingBadData(). It will take an array as input. Any number of numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative we will call it "Bad Data". If a number is positive, we will call it "Good Data".
Now i have to find out how many bad data are there in  array and return that number.
-*/ 

function findingBadData(numbers){
    if(typeof numbers !== 'object'){
        return "please Provide an array input"
    }
       let count = 0;

     for( let i = 0; i < numbers.length; i++){
      const element = numbers[i];
     
      if(element < 0){
         count = count + 1;
         console.log('Bad Data');
      }
      else if( element >= 0){
         console.log('Good Data');
      }
      else{
         console.log(numbers[i]);
      }
    }
    
    return count;
 }

let numbers = [ 2, -5, -7, -13];
const FinalOutPut = findingBadData(numbers);
console.log(FinalOutPut);


/*--
problem : 5.
I will be given a function called gemsToDiamond(). It will take three numbers (the number of gems of your 3 friends) as input.Power of gems per 1st friend = 21, Power of gems per 2nd friend = 32,Power of gems per 3rd friend = 43.[Gems capacity means how many diamonds a gem can be converted into. ]
--*/ 

function gemsToDiamond(friend1, friend2, friend3){

    if(typeof friend1 !== 'number' && friend2 !== 'number' && friend3 !== 'number'){
        return "please Provide number input"
    }
    
    const firstFriendDiamond = friend1 * 21;
    const secondFriendDiamond = friend2 * 32;
    const thirdFriendDiamond = friend3 * 43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    
    if (totalDiamond >= 1000*2  ){
        const restDiamond = totalDiamond - 2000;
        return restDiamond;
        
    }
    else if (totalDiamond < 1000*2 ) {
        return totalDiamond;
    }
    else{return '---Do not know----'}


}

let friendOneGems = 20;
let friendTwoGems = 200;
let friendThreeGems = 50;
const totalDiamonds = gemsToDiamond(friendOneGems, friendTwoGems,friendThreeGems);
console.log(totalDiamonds);