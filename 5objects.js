/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value
// object  - passed by value
xxx
 const num = 'hello world';
 const anotherNum = 'hello world';
 console.log(num === anotherNum);

xxx
const obj = {};
const anotherObj = {  };
console.log(obj === anotherObj);

//object
let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31;

console.log(example1.age);

console.log(Object.keys(example1));
console.log(Object.values(example1));
console.log(example1.hasOwnProperty('firstName'));
console.log(example1.hasOwnProperty('firstName2'));

xxx
let example1 = {
    firstName: 'Dylan'
};

let example2 = Object.assign({}, example1); 
//means example 2 has all the same value as example 1

example2.lastName = 'Israel';

console.log(example1);
console.log(example2);


// xxx const key in obj
const obj = { one: 1, 
			  two: 2 };

for (const key in obj) {
  console.log('key', key);
}
ans:key,"one"
>key,"two"

xxx  xxxfor-in loop
const obj = { one: 1, 
			  two: 2 };

for (const key in obj) {
  console.log('value', obj[key]);
}

ans:value,1
>value,2


 xx Object.keys(), Object.values(), Object.entries()
const user = {
  name: 'John',
  age: 29  
};
a.
const ageExists = Object.keys(user).includes('age');
console.log(ageExists);
b.
 console.log(Object.values(user));
or
 const values = Object.keys(user).map(key => user[key]);
 console.log(values);

xxx
const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95  
};

const monthlyTotal = Object.values(monthlyExpenses).reduce(
    (acc, expense) => acc + expense, 0
);
console.log(monthlyTotal);

xxx
const user = {
  name: 'John',
  age: 29  
};

console.log(Object.entries(user));

xxx
const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};

console.log(Object.entries(users));
ans:[["1092384", {name: "Fred", age: 17}], ["2345234", {name: "John", age: 29}], ["8798129", {name: "Jane", age: 42}]]


xxx
const users = {
  '2345234': {
    name: "John",
    age: 29
  },
  '8798129': {
    name: "Jane",
    age: 42
  },
  '1092384': {
    name: "Fred",
    age: 17 
  }
};

const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }  
  return acc;
}, []);
console.log(usersOver20);
ans:[{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]


XXXXobject property shorthand
const bar = "Bar Boca";
const cafe = "Aku Aku";
const restaurant = "Colonel Mustard";

const favouritePlaces = {
    bar: bar,
    cafe: cafe,
    restaurant: restaurant
 }

console.log(favouritePlaces)
ans:{bar: "Bar Boca", cafe: "Aku Aku", restaurant: "Colonel Mustard"
	 
	 // Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = "Bar Boca";
const cafe = "Aku Aku";
const restaurant = "Colonel Mustard";

const favouritePlaces = {
    bar,
    cafe,       //	object property shorthand
    restaurant,
    greeting() {
        console.log("Hello there!");
    }
}
console.log(favouritePlaces);
	 
OR favouritePlaces.greeting();
ans:hello there

OR console.log(favouritePlaces.restaurant)
ANS:Colonel Mustard

	 xxx
const color = 'green';
const hexCode = '#0f0';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60"
};
colors[color] = hexCode;//adds color green-hexcode i.e #0f0 to the object list


console.log(colors);
ans:
	 	
xxx delete
const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

colors[color] = hexCode;

delete colors.blue;
console.log(colors);

	 
	 xxx getColor
const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
};

colors[color] = hexCode;

 function getColor(key) {
   return colors[key];
 }

console.log(getColor('orange'));
//console.log(colors);

