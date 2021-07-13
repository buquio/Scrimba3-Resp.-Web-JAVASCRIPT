// classes === constructor functions
// classes - create objects with shared methods

// function Student() {}

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;      
  }   
    
  addSubject() {}  
}
//1
const student1 = new Student(1, 'Reed');
console.log(student1);
ans:Student
//2
const student1 = new Student(1, 'Reed');
console.log(student1.id());
ans:1

xxx
class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;      
  }  
    
  getStudentName() {
    return `Student: ${this.name}`  
  }
    
  addSubject() {}  
}

const student1 = new Student(1, 'Reed');
console.log(student1.getStudentName());
ans:Student: Reed

xxx
// 1. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear and genres[].

// 2. Create two methods on the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().

// 3. Instantiate a new instance of the class using data from your your favourite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

// Beginning:
class Film {
	constructor(id, title,director, releaseYear, genres = []) {
		this.id = id;
		this.title = title;
		this.director = director;
		this.releaseYear = releaseYear;
		this.genres = genres;
	}
	
	addGenre(genre) {
		this.genres = [...this.genres, genre];
	}
	
	getFilmTitle() {
		return `Film: ${this.title}`
	}
}

const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954");
console.log(myFavouriteFilm.director)

myFavouriteFilm.addGenre("Thriller");
console.log(myFavouriteFilm.genres)
console.log(myFavouriteFilm.getFilmTitle());

ans:Afred Hitchcock
>   ["Thriller"]
>   Film: Rear Window

xxx
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
}

console.log(new Product("Coffee Maker", 99, true));
ans:Product

xxx class constructor inside class constructor
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }    
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
     super(name, price, discountable);
     this.percentOff = percentOff; 
  }  
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(product1)



xxx
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
  
  isDiscountable() {
    return this.discountable;  
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
     super(name, price, discountable);
     this.percentOff = percentOff; 
  }  
  
  getSalePrice() {
     if (super.isDiscountable()) {
       return this.price * ((100 - this.percentOff) / 100);
     } else {
        return `${this.name} is not eligible for a discount`;
     }
  }
}
//1
const saleProduct1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(saleProduct1.getSalePrice())
ans:79.2

//2
const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
console.log(saleProduct1.getSalePrice());
ans:Coffee Maker is not eligible for a discount


xxx setters& getters
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price; 
    this.discountable = discountable;
  }

  get price() {   //initial price -getters
    return this._price;
  }
  
  set price(price) {   //new prsice-setters
    if (typeof price !== "number") {
      return this._price;
    } else {
      this._price = price; 
    }
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 30;
console.log(product1.price);
ans:30

