// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];
let result = carBrands.filter((car) => car.type === "sedan");
console.log(result);
/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
function reverseString(string) {
  let word = "";
  for (let i = string.length - 1; i >= 0; i--) word += string[i];
  return word;
}
console.log(reverseString("word"));
// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array

function arrayOfStrings(array) {
  let longestString = "";

  array.forEach(function (string) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  });
  return longestString;
}
console.log(arrayOfStrings(["small", "apple", "giga", "aoifhioedfhoif"]));
// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  let total = arr.reduce((a, b) => {
    return a + b.price;
  }, 0);
  return total;
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

/* RECURSION IN MY OWN WORDS! 

  Recursion is the process of a function calling itself over and over again until it reaches its base case.
  For example, say we have a function thats called blast off, something like this

  function blastOff(num){
  if (num ===  11) return "BLAST OFF"
  
   console.log(num)
   blastOff(num + 1)
  }
  blastOff(1);

  Notice line 76 where we have a condition that if num equals 11 then we would return "BLAST OFF", thus ending this function.
  But what if the number is 1? Like in our example in line 81?
  We can travel along it and see, so on line 76 we know that num is not 11 so it ignores that line and goes towards console.log
  which would console.log  => 1
  then down on the following line we have blastOff(num + 1) so this is where our num does a change and gets added by one.
  Making blastOff(2)
  which once again begins another function call where num gets compared to see if 2 === 11, which it does not so itgoes
  down and runs console.log(num) which consoles => 2
  and once more, blastOff(num + 1) runs once more making it => blastOff(3)
  and so and so until num === 11 is considered to be true.
  So in order for our function not to loop itself to death, we have to add a base case to our recursive function,
  in my example the base case would be (num === 11). This halts the program telling it not to get any further.
  What makes our function a recursive function is that we call the function WITHIN the function this is shown in line
  79 where we call blastOff(num +1) within our blastOff function.
*/

//6. OOP has 4 pillars and we learned about each in this phase.
//Choose the pillar you are most comfortable with
//and explain it in simple terms with an example.
//Also, if you cannot explain any of them, we have failed as
//instructors and you will be banished to the nether realms.

/* 
OOP Pillar - Encapsulation

Encapsulation is where we hide  data that we don't want our program to access. Think of it as scoping. 
Where a global variable, a variable thats labeled outside of functions, can be acessed in whichever function that calls for it 
but a local variable, a variable thats labeled within a single function, can only be used within the block that it is
decalared on.

*/

/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */
const flipBool = (arr) => {
  return arr.map(function (bool) {
    return !bool;
  });
};

console.log(flipBool([true, false, true]));

// 8.
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`

function feastOrFamine(animal, food) {
  let firstCharAnimal = animal.charAt(0);
  let lastCharAnimal = animal.charAt(animal.length - 1);

  let firstCharFood = food.charAt(0);
  let lastCharFood = food.charAt(food.length - 1);
  // console.log(firstCharAnimal);
  // console.log(firstCharFood);
  // console.log(lastCharAnimal);
  // console.log(lastCharFood);

  if (firstCharAnimal === firstCharFood && lastCharAnimal === lastCharFood) {
    return console.log(firstCharAnimal + lastCharAnimal);
  } else {
    return console.log(false);
  }
}

feastOrFamine("cat", "chicken cutlet");
feastOrFamine("cat", "chicken cutletg");

// EXTRA CREDIT

/* I believe that the one who got chosen to get to the next round was person 1 and person 2, because they both demonstarted
that they could get to the answer no matter the situation. In the end, I believe (I dont actually know) that google would
have tougher question or siuations where they don't expect the developer to know the answer to. However they do expect them
to reach the answer somehow, whether it be with looking up resources or not. They don't expect everyone to memorize each
algorithim but rather come with a way to tackle it and reach a conclusion.
But This is what I  WANT TO believe, I already know person 1 got in and person 2 didn't but I'm rooting for both.
*/
