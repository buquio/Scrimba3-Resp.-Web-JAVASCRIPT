	 
	//  xxx merging object  helps to merge two or more object into empty one{}
  const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

const verifiedDefault = {
  verified: false  
};

console.log(Object.assign({}, user, newUser, verifiedDefault));-helps to merge two or more object into empty one{}
// orxxx
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

console.log(Object.assign({}, user, newUser, { verified: false }));

// xxx or object assign or use spread
	const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true 
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);



// xxxES6 example
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [ , , ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
// console.log(source);


	 
// xxx mapping(variables mapping/object mapping)
const nums = {
  1: 1,
  true: true
};
//mapping the above object
const map1 = new Map([
  [1, 1],
  [true, true]  
]);

//map1.set('key', 'value');

console.log([...map1.keys()])
	 
// xxxobjects can be used as keys-diff key/value of diff object can be mapped 
const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

	 //mapping the above object-user1 to variable-secretKey1
const secretKeyMap = new Map([
// or const secretKeyMap = new weakMap([
	
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const key = secretKeyMap.get(user1);
console.log(key);
	 
	 xxx
const user = {
  name: "john",
  verified: true  
};
//mapping the above object
const userMap = new Map([
  ["name", "john"],
  ["verified", true]  
]);

console.log(userMap.size);
	 

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), 
//1b. and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to.
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

//1.
const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};
//1b/2/3.mapping the above object
const favouritePlaceMap = new Map([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', true],
    ['averageBill', 17.4]
]);

console.log(favouritePlaceMap.get('averageBill'));


// xxx 'this' with function inside object.
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    let that = this;
    setTimeout(function() { //takes an ananymous function and a timing
      console.log(`Would you like to friend ${that.username}?`);   
    }, 2000);  
  } 
}

userData.askToFriend();

// xxx this with arrow fxn
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`);   
    }, 2000);  
  } 
}

userData.askToFriend(); 
userData.getBio(); //uses the first 'this'i.e getBio