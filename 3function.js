xxx
// input -> performs an action
// input -> returns some data or send some data

let greeting = "Hi";  

function echo(input) {
  console.log(`${input} ${greeting}`);//specify order of arrangmt and other parameters to be displayed  
}

echo(42);

-----------
ans= 42 Hi

//or
let greeting = "Hi";  

function echo(input, greeting) {
  console.log(`${greeting} ${input}`);
}

echo(42, "Hi");//u must specify 2 parameter as function echo  has 2 parameter

----------
ans=Hi 42


xxx
let greeting = "Hi";  
let result;

function echo(input, greeting) {
 result = `${greeting} ${input}`;  
}

echo(42, "Hi");
console.log(result);

//or
let greeting = "Hi";  
let result;

function echo(input, greeting) {
 return `${greeting} ${input}`;  
}

const result = echo(42, "Hi");
console.log(result);

ans=Hi 42

or console.log(echo(42,"Hi")) //by me


xxx
const user1 = "Reed";
const user2 = "Doug"; 

function sendUserMessage(user, text) {
  console.log(`User ${user} says: ${text} ${greeting}`);
}

sendUserMessage(user1, 'Hey there');
sendUserMessage(user2, "What's up?");


// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:

function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
} 
splitBill(10, 2)
splitBill(16, 4)
splitBill(350, 9)


console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))


xxx Closures functions
// 1) Closures are a property of JavaScript functions only.
// 2) Call function in different scope than where function was original defined/located
//1.normal method
let likeCount = 0; 

function handleLikePost() {
  likeCount += 1;  
}

handleLikePost();
console.log('like count:', likeCount);

//2.Closure method
//or u can bring the   likeCount += 1;  and console.log('like count:', likeCount);inside the function bracket
function handleLikePost() {
  let likeCount = 0; //likeCount can not always be set back to zero u need to add it up(see below example )
  likeCount += 1;  
  console.log('like count:', likeCount);
}

handleLikePost();
handleLikePost();
handleLikePost();

xxx //3 likeCount can not always be set back to zero u need to add it up d/4 create function addLike
function handleLikePost(step) {
  let likeCount = 0; 
  return function addLike() {
    likeCount += step; //adding & storing   
    return likeCount;
  }
//   addLike();
  console.log('like count:', likeCount);
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());


xxx
//1. Stretch goal: Write a countdown function that can count from a provided number 11, with a provided step

//2. Challenge: Write a countdown function with a hard-coded starting number inside closure

//1.
function countdown(startingNumber, step) {
  let countFromNum = 11;
  return function decrease() {
    countFromNum -= 1;
    return countFromNum;
  }
}

const countingDown = countdown();

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

//2
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}
 
const countingDown = countdown(20, 5);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());



    // celsius to fahrenheit
function convertTemperature(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

console.log(convertTemperature(21));

   // add .toFixed(decimalPlaces) if result is decimal
function convertTemperature(celsius, decimalPlaces) {
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 1));

xxx //add (!decimalPlaces)if result is not decimal but you want it to have 1 decimalplace.
function convertTemperature(celsius, decimalPlaces) {
    
  if (!decimalPlaces) {
     decimalPlaces = 1;
  }
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21));


orxxx short
function convertTemperature(celsius, decimalPlaces) {
    
  decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21)); //if decimal is not specified dafault is 1dcp
or console.log(convertTemperature(21, 0)) //if u specify 0dcp result will be whole number.

orxxx 
function convertTemperature(celsius, decimalPlaces = 1) { //you can specify decmalplace directly here.
    
//   decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0)); 

