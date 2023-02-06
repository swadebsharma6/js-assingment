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
let number = 33;
const result = mindGame(number);
console.log(result);

function evenOdd(str){
   if(typeof str !== 'string'){
       return "plz Provide string input"
   }
   const strLength = str.length;
   if(strLength % 2 === 0){
       return 'even';
   }
   else{
       return 'odd';
   }
}
let strName =  2000;
const finalResult = evenOdd(strName);
console.log(finalResult);
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
let number1 = 22;
const isGreaterThan = isLGSeven(number1);
console.log(isGreaterThan);

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