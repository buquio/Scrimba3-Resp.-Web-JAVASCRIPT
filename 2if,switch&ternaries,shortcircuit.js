
// XXX   if statement,if/else,switch,operator comparism,ternaries,shortcircuit

// if statements - evaluate boolean values
 const prefersDarkMode = true;

if (prefersDarkMode) {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
}

console.log('light mode set!');
document.body.style.background = 'ghostwhite';

//else if
	
const prefersDarkMode = false;
const prefersSolarizedMode = true;

if (prefersDarkMode) {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
} else if (prefersSolarizedMode) {
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
} else {    
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}


// 'switch statement' instead of 'if statements' - evaluate boolean values
 const prefersDarkMode = true;
 const prefersSolarizedMode = true;
const colorMode = 'dark';

switch (colorMode) {
  case 'dark':
    console.log('dark mode set!');  
    document.body.style.background = 'black';
    break;
 case "solarized":
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
    break;
  default:  
    console.log('light mode set!');
    document.body.style.background = 'ghostwhite';
}

// xxx using conditional operator comparism
const colorMode = 'prefersDarkMode' ;

if (colorMode === 'prefersDarkMode') {
  console.log('dark mode set!');  
  document.body.style.background = 'black';
} else if (colorMode === 'prefersSolarizedMode') {
   console.log('solarized mode set!'); 
   document.body.style.background = 'palegoldenrod';
} else {    
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}



// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on, depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

const time = "night" // could be "afternoon", "evening" and "night"

 if (time === "morning") {
     console.log("Good morning!");
 } else if (time === "afternoon") {
     console.log("Good afternoon!");
 } else if (time === "evening") {
     console.log("Good evening!");
 } else {
     console.log("Good night!");
 }


xxx
const time = "night" // could be "afternoon", "evening" and "night"

switch (time) {
    case "morning":
        console.log("Good morning!");
    break; 
    case "afternoon":
        console.log("Good afternoon!");
    break; 
    case "evening":
        console.log("Good evening!");
    break;
    default:
        console.log("Good night!");
}



// xxxDATA types

A.Primitive types:
string
number
boolean
undefined
null
symbol

// xxxObject typeof-to find the type of data-type 
let message = 'jane';
console.log(typeof message);

console.log(typeof 42);
console.log(typeof window);
console.log(typeof true);

xxxCoverting variable types
// 1) Explicit type conversion

console.log(String(42));
console.log(Boolean(message));


// 2) Implicit type conversion (coercion) i.e automatic convertion by javascript
console.log('1' * '2');
console.log('10' + 20);

//3
if (Boolean(value) === true) {
  // if true, do something with value  
}

//4
// truthy (true)
// falsy (false)

if ('hello') {
  console.log('run');
} else {
  console.log('skipped');
}
//ans;run-i.e truthy

//5
if (0) {
  console.log('run');
} else {
  console.log('skipped');
}
//ans; skipped-i.e falsy

 xxx falsy values
 false
 0
 ''
 null
 undefined
 NaN


xxx// 1) Avoid direct comparisons in conditionals
const username = '';

if (username === false) {
  console.log()
}
//but use
const username = undefined;

if (!username) {
  console.log('no user');
}


// 2) Use triple equals === (strict equals operator) 

if (null === undefined) {
  console.log('equals');
} else {
  console.log('not equals');
}
// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}


// Challenge 1:
// What will the following console logs display? (they're all true or false)

 console.log("Challenge 1:")
 console.log(!undefined); // true
 console.log(Boolean(NaN)); // false
 console.log(false === false); // true
 console.log(5 === "5"); // false
 console.log("Hello" == "hello"); // false

// Challenge 2:
// What will the following console logs display? (they're all true and false)
console.log("Challenge 2:")
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(!null); // true
console.log(!!"hello"); // true

// Challenge 3:
// List all the falsy values in JavaScript
undefined
NaN
null
0
""
false

// xxx using ternaries instead of if statement(not always)
//old syntax
const isAuthenticated = false;
 let cartItemCount = 0;

 if (isAuthenticated) {
   // add item to cart
   cartItemCount = 1;
 } else {
   // tell user to login
 console.log("Please log in!");
   cartItemCount = 0;
 }

// xxxusing ternaries
const isAuthenticated = false;

const cartItemCount = isAuthenticated ? 1 : 0;
//not applicable- const cartItemCount = isAuthenticated ? 1 : console.log("Please log in!");-use old syntax

xxx
const age = 20;
let greeting;

 if (age < 10) {
   greeting = "Hey there"; 
 } else {
   greeting = "That's an interesting age!";  
 }
 console.log(greeting);

//short using ternaries
const age = 20;
let greeting;

greeting = age < 10 ? "Hey there" : "That's an interesting age!";
console.log(greeting);


xxx
const age = 12;
 let greeting;

 if (age < 10) {
   greeting = "Hey there"; 
 } else if (age > 18) {
   greeting = "Greetings";  
 } else if (age > 10) {
   greeting = "What's up?";  
 } else {
   greeting = "That's an interesting age!";  
 }
 console.log(greeting);

//short using ternaries
const age = 12;
 let greeting;

 greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";
console.log(greeting);
note:not advisible too clumsy


xxx
// Challenge 1: Check if the user is allowed/anthenticated to add an "iPad" to its shopping cart,by Writing a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty/0 string if the user isn't authenticated

const isAuthenticated = false;
let shoppingCart;

// write your code here
shoppingCart = isAuthenticated ? "iPad" : "0";


console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not.

//const age = 18; 
 const isOldEnough=18;
let allowedAccess;

//allowedAccess = age >= 18 ? true : false;
allowedAccess = isOldEnough >= 18 ? true : false;

console.log("allowedAccess: ", allowedAccess);


// xxx LOGICAL-OPERATOR-SHORTCIRCUIT for if/else
const response = "Reed";
 let username;

 if (response) {
   username = response;
 } else {
   username = "guest";
 }
console.log(username);

//using ternary
username = response ? "response" : "guest"

// xxx using short circuit
const response = "Reed";
let username;

const username = response || "guest";
console.log(username);
//xxx or
//const response = "Reed";
//let username;
//
// const result = 'Reed' || '';
// console.log(result);


// xxxLOGICAL-OPERATOR-SHORTCIRCUIT for embeded if statements
const response = "Reed";
const isEmailVerified = false;

 let username;

 if (response) {
   if (isEmailVerified) {
     username = response;
   }  
 } else {
   username = "guest";
 }

//short circuit using &&,||
const response = "Reed";
const isEmailVerified = false;

const username = response && isEmailVerified || "guest";
//or better:to returns Reed 
const username = response || "guest" && isEmailVerified ;
console.log(username);


// Challenge 3: what is the value of user when the hasValidEmail variable is false and response is empty?
	
const response = "";
const hasValidEmail = false;

const user = hasValidEmail && (response || "guest");// F && (F OR F)
console.log("user: ", user);
ans;false

3b
const response = "";
const hasValidEmail = true;

const user = hasValidEmail && (response || "guest");//T && (F OR F)
console.log("user: ", user);

ans;guest



xxx
/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold e.g 130 are allowed to upvote. */

const karma = 130;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true(boolean) if karma is above 130. If not, set it to false
let hasEnoughKarma = karma > 130 ? true : false;

// set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote = isModerator || hasEnoughKarma;
console.log("canUpvote:", canUpvote);


/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete = hasEnoughKarma && isModerator;
console.log("canDelete:", canDelete);


