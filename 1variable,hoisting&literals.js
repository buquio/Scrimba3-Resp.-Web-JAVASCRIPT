

//window/global/use strict/local(this)/global(this)
"use strict";

// hoisting
var age;
console.log(age); // undefined
age = 26;

ans:age = 26;

XXX
 var message = "hello world";//can be changed to below
 var message = "hello again";

// browser - window
// server - global
//document-local/global/local(this)/global(this)

// console.log(message);-window

// var console = 'hi'- in window
// console.log("hi");

// 1) sloppy/ "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language


// xxxx scope-variable shadowing
var price = 20;
var isSale = true;

if (isSale) {
  // discount price of product
	let price = 20 - 2; 
	// do something 
  console.log('price', price);//function scope
}
console.log('price', price);//global scope

ans: price, 18
ans: price, 20
//note:	the second 'price'(let price) see doc-global var price which can be reassigned
//	but let & const -are block-scoped
  


// xxx   template literals`` 
let username = "Jane Doe";
let message = `Hi ${username}, how are you?`;
 console.log(message);

// xxx example 2- template literal ``
 const weight = 150; 
 const moonWeight = `You weigh ${weight * 0.165} pounds on the moon`;
 console.log(moonWeight);


// xxx escaping ','' & "" using \
'I\'m a string';
"He said, \"I am string.\"";

// or xxx escaping ', '' & "" using template literal ``
 `I'm a string`;
 `He said, "I am string."`;

// xxx using template literal `` for several lines
const threeLines = `This is a string 
that spans across 
three lines.
`;


// xxx string literals ${}
 Challenge: Help Darth Vader express himself to his son!
const mySon = "Luke";
const parentalStatus = "father";
const message = `${mySon}, I am your ${parentalStatus}`;
console.log(message);


// xxxVariable naming
 const name = 'Jane';
 const Name = 'Mark';
 const NAME = 'Fred';

 console.log(name, Name, NAME);

// xxx2
 let fullName = `${firstName} ${lastName}`;
 
let firstname; X
let first_name;X
let FIRSTNAME;X
let FIRST_NAME;X
let firstName;

// xxx3  using is, has
 let isModalVisible = true;

 if (isModalVisible) {
   // do something  
 }

 let isLoading;
 let hasPosition;


 
// xxx4 should not be changed
const COLOR_RED = '#f00';