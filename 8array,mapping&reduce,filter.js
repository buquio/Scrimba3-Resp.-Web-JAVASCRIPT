Arrays contains several object.
xxxarray
const todos = [];

const todo1 = {
  text: 'Wash the dishes',
  complete: false  
};

const todo2 = {
  text: 'Do laundry',
  complete: false  
};

todos.push(todo1, todo2);
todos.pop();

console.log(todos);


xxx
// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs); //ans;['Like a rolling stone', 'Blowing in the wind', 'Mr Tambourine man', 'It aint me']
console.log(favouriteSongs[0])//ans;It aint me

console.log(favouriteSongs[favouriteSongs.length - 1])//ans;It aint me

favouriteSongs.pop();


//xxx
let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numArray.length; i++) {
    
    total += numArray[i];
}

console.log(total);
//ans=450

//xxx
function add(num1, num2) {
    return num1 + num2;
}
 
console.log(add(10, 6));
console.log(add(15, 7));
console.log(add(20,2));


xxx// METHODS e.g includes, some, every
const temperatures = [69, 82, 73, 64]; // 0, 1, 2, 3or-1(last one)

console.log(temperatures.includes(50));

xxx
const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const result = temperatures.some(temperature => temperature.isRecordTemp); // true / false
console.log(result);

//eg 2
const result = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
console.log(result);


xxx
// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]
//1
const hasWonGrammy = songs.some(song => song.wonGrammy === true);
//or
const hasWonGrammy = songs.some(song => song.wonGrammy);
console.log(hasWonGrammy);
//2
const allMegaHits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegaHits);

//  xxx MAPPING ARRAY
const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];
//1
const newTemps = temperatures.map(temperature => {
   temperature.isRecordTemp = true; //sets  all isRecordTemp to true
return temperature;
});
console.log(newTemps);
ANS  [
  { degrees: 69, isRecordTemp: true },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: true },
  { degrees: 64, isRecordTemp: true }
]


//2 map & ...spread -to alert users
const newTemps =temperatures.map(temperature => //perform a function on each of the item
temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature )
console.log(newTemps);
ANS [
  { degrees: 69, isRecordTemp: true },
  { degrees: 82, isRecordTemp: true, isHigh: true },
  { degrees: 73, isRecordTemp: true, isHigh: true },
  { degrees: 64, isRecordTemp: true }
]  


//3 map & for each -to alert users
temperatures.map(temperature => //perform a function on each of the item
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature )
    .forEach(temperature => {
     if (temperature.isHigh) {
       console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
     }
  })

ANS 
Temperature 82 was a record high last week!
Temperature 73 was a record high last week!



// xxx ES6 ADDITIONAL METHODS e,g FILTER+ STARWITH,
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



// xxxMETHOD -FILTER  -FIND  -INCLUDES
const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
console.log(results);
ans:[{name: "Cap City Diner", milesAway: 2.2}, {name: "Chop Shop", milesAway: 4.1}, {name: "City Tavern", milesAway: 0.5}]
//2
const results = restaurants.filter(restaurant => restaurant.name.startsWith(''))
console.log(results);
ans:[{name: "Cap City Diner", milesAway: 2.2}, {name: "Chop Shop", milesAway: 4.1}, {name: "Northstar Cafe", milesAway: 0.9}, {name: "City Tavern", milesAway: 0.5}, {name: "Shake Shack", milesAway: 5.3}]
//3
const results = restaurants.filter(restaurant => true);
console.log(results);
ans:[{name: "Cap City Diner", milesAway: 2.2}, {name: "Chop Shop", milesAway: 4.1}, {name: "Northstar Cafe", milesAway: 0.9}, {name: "City Tavern", milesAway: 0.5}, {name: "Shake Shack", milesAway: 5.3}]
//4
const results = restaurants.filter(restaurant => 
  restaurant.name.startsWith('C') && restaurant.milesAway < 3)
console.log(results);
ans:[{name: "Cap City Diner", milesAway: 2.2}, {name: "City Tavern", milesAway: 0.5}]
//5
const result = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2)
console.log(result);
ans:{name: "Northstar Cafe", milesAway: 0.9}


xxx-METHOD -reduce
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(` accumulator: ${accumulator}, menu item price: ${menuItem.price}
  `);
  return accumulator + menuItem.price;  
}, 0);
console.log(total);

ans:accumulator: 0, menu item price: 8
>accumulator: 8, menu item price: 18
>accumulator: 26, menu item price: 23
>accumulator: 49, menu item price: 13
>accumulator: 62, menu item price: 12
>accumulator: 74, menu item price: 31
>105

xxx
// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];


const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(totalWeight);

//xxx using reduce
const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);

//or using map
const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map(num => num * 2);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);

ans:doubled numbers,[2, 4, 6, 8, 10, 12]
>numbers,[1, 2, 3, 4, 5, 6]

//2
const numbers = [1, 2, 3, 4, 5, 6];

const greaterNumbers = numbers.reduce((acc, num) => {
  if (num > 3) {
    acc.push(num);
  }  
  
  return acc;
}, []);
console.log(greaterNumbers);
ans:[4, 5, 6]

//or using filter/arrow fxn
const greaterNumbers = numbers.filter(num => num > 3);
console.log(greaterNumbers);

//or using reduce/arrow fxn
const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);// concat arrange it vertically
console.log(greaterNumbers);

ans:[4, 5, 6]

xxx
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas;

allMenuIdeas.push('Club Sandwich');

console.log(allMenuIdeas);
console.log(lunchMenuIdeas);//contains same as allMenuIdeas
ans:["Harvest Salad", "Southern Fried Chicken", "Club Sandwich"]

//2 nonmutated array method-using concat
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');

console.log(allMenuIdeas);
console.log(lunchMenuIdeas);//does not contains same as allMenuIdeas

3 using spread method
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = [...lunchMenuIdeas];

allMenuIdeas.push('Club Sandwich');

//1
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
console.log(otherMenuIdeas);

//2
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
	...dinnerMenuIdeas
];
console.log(allMenuIdeas);
2b
 const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
 console.log(otherMenuIdeas );

//xxxslicing from inside & replacing
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1)
];

console.log(finalMenuIdeas);


xxx slicing off "meatloaf"
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
]
console.log(finalMenuIdeas);

