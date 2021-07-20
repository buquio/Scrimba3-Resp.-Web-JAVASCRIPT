// xxx array destructure
const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

//  let first = finalMenuItems[0];
//  let second = finalMenuItems[1];
//  let third = finalMenuItems[2];

const [first, second, third] = finalMenuItems;

 console.log(first, second, third);
ans:American Cheeseburger Southern Fried Chicken Glazed Salmon

// xxx//////
const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

console.log(finalMenuItems);
ans:
[ 'American Cheeseburger',
  'Southern Fried Chicken',
  'Glazed Salmon' ]


xxx changing first to second
const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

let [first, second] = finalMenuItems;
[second, first] = [first, second];

console.log(first, second, third);

// xxxusing your own varible e.g winner,losers
const finalMenuItems = [
  "American Cheeseburger",   //	-winneri.e you name one winners other are losers
  "Southern Fried Chicken",  //	-losers
  "Glazed Salmon"  // -losers
];

const [winner, ...losers] = finalMenuItems;

console.log({ winner, losers });

xxx
// Challenge: 
// In our restaurant, the chef has some dishes in two different categories,fish and meat.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

// Modify these four variables first i.e chefsDishes start with 'S' while regularDishes are others
const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
let [chefsFishDishes, ...regularFishDishes] = fishDishes;//means chefsFishDishes=Salmon Rillettes & regularFishDishes=others(destructure)

const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']
let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;//same as above

console.log(chefsFishDishes);
 console.log(regularFishDishes);
 console.log(regularMeatDishes);
 console.log(chefsMeatDishes);

ans:Salmon Rillettes
>["Grilled Tuna Provencal", "Fish and Chips"]
>Lasagna
>["Spaghetti", "Satay Chicken Skewers"]

//b. Finally, use the spread operator to create all chefsDishes(all S)&regularDishes
let chefsDishes = [...chefsMeatDishes, chefsFishDishes] //note:you put .... if they are many but no.... if only one item

let regularDishes = [...regularFishDishes, regularMeatDishes];

console.log(chefsDishes); //or console.log(`chefsDishes:${chefsDishes}`);
console.log(regularDishes);//or console.log(`regularDishes:${regularDishes}`);

ans:["Spaghetti", "Satay Chicken Skewers", "Salmon Rillettes"]
>["Grilled Tuna Provencal", "Fish and Chips", "Lasagna"]






xxx
const customerDishes = [
  "Chicken Wings",
  "Fish Sandwich",
  "Beef Stroganoff",
  "Grilled Cheese",
  "Blue Cheese Salad",
  "Chicken Wings",
  "Reuben Sandwich",
  "Grilled Cheese",
  "Fish Sandwich",
  "Chicken Pot Pie",
  "Fish Sandwich",
  "Beef Stroganoff"
];

const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes)
ans:["Chicken Wings", "Fish Sandwich", "Beef Stroganoff", "Grilled Cheese", "Blue Cheese Salad", "Reuben Sandwich", "Chicken Pot Pie"]



xxx
const numbers = new Set([[1], [2], [3]]);

 for (const num of numbers) {
   console.log(num);  
 }

xxx
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

ans:
>1
>2
>3
>4
>5
xxx
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  console.log(number);  
});
ans:
>1
>2
>3
>4
>5

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/