const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
//	  or
//	  console.log(`User ${userData.username} is a ${userData.title}`);
  }  
}

userData.getBio();


//xxx this
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`);
  },
//  askToFriend() {
//    setTimeout(function() {
//      console.log(`Would you like to friend ${this.username}?`);   
//    }, 2000);  
//	  or using arrow function
        askToFriend() {
	   setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`);   
    }, 2000);  

  } 
}

userData.askToFriend();


// xxx this: reference to an object
4 Rules to 'this'. How is it called?

1) in the global context
2) as a method on an object
3) as a constructor function or class constructor
4) as a DOM event handler


1) in the global context (global object, undefined in strict mode)
2) as a method on an object (object on left side of dot)
3) as a constructor function or class constructor (the instance itself with new)
4) as a DOM event handler (the element itself)


1) in the global context (global object, undefined in strict mode)
 function whatIsThis() {
 //   console.log(this);
  this.something = 2;
  console.log(something);
 }

 whatIsThis();


//2) as a method on an object (object on left side of dot)
 const user = {
   first: 'Reed',
   last: 'Barger',
   greetUser() {
     console.log(`Hi, ${this.first} ${this.last}`);  
   }  
 }

 const userInfo = {
   title: "Programmer",
   user: {
      first: 'Reed',
      last: 'Barger',
      greetUser() {
       console.log(`Hi, ${this.first} ${this.last} ${this.title}`);  
      }   
   }  
 }

 userInfo.user.greetUser()


//3a class constructor-instance itself with new
class User {
  constructor(first, age) {
    this.first = first;
    this.age = age;  
  }  
  
  getAge() {
    console.log(`${this.first}'s age is ${this.age}`);  
  }
}

const user = new User('Bob', 24);
user.getAge();
ans:Bob's age is 24

//3b function constructor
function User(first, age) {
  this.first = first;
  this.age = age;
}

User.prototype.getAge = function() {
  console.log(`${this.first}'s age is ${this.age}`);  
}

const user2 = new User('jane', 25);
user2.getAge();


//4 DOM
 const button = document.createElement('button');
 button.textContent = "Click";
 document.body.appendChild(button);

 button.addEventListener('click', function() {
   console.log(this);
 })


XXX
// call(), apply(), bind()
const user = {
  name: "Reed",
  title: "Programmer"  
}

function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

printUser.call(user);
//or printUser.apply(user);



//call/apply difference-
//for apply:if there are 2 or more argument,the argument need a arraybracket[]e.g printBio.apply(user, ['London', 'England'])

const user = {
  name: "Reed",
  title: "Programmer"  
}

function printBio(city, country) {
  console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
}

printBio.call(user, 'London', 'England')
or 
printBio.apply(user, ['London', 'England'])


//bind - set the 'this" permanently
const user = {
  name: "Reed",
  title: "Programmer"  
}

function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

const userDescription = printUser.bind(user);

userDescription()


xxx arrow function
const user = {
  first: 'Bob',
  fn() {
     console.log(this.first); 
  },
  arrowFn: () => {
    console.log(this.first);  
  }
}

user.fn();
or user.arrowFn();


xxx remind map/this/arrow function/bind
const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000); //this is undefined here.pls use arrow function
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

function callback() {
   // do something with array elements 
}

[].map(callback);

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()
ans:favourited


//xxx"this" using arrow function
const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(() => this.favoriteProduct(), 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()
ans:coaster favourited!
	
//	2 putting favourite function inside class constructor use arrow function within favourite
	const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = () => {
        user.favorites.push(this.name);
    console.log(`${this.name} favorited!`); 
    }
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

//   favoriteProduct() {
//     user.favorites.push(this.name);
//     console.log(`${this.name} favorited!`);
//   }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()

xxxusing bind/this
const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct.bind(this), 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()


xxxusing bind for multiple times-use bind/this +put favorite function inside the class constructor.
const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this);
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct()
ans:coaster favourited!
