//a.  normal object with function inside
const student = {
  id: 1,
  name: "Reed",
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];//[], new subject
  }
}
console.log(student.subjects);

//b. using  constructor function
function Student(id, name, subjects = []) { //constructor template
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}
const student1 = new Student(1, 'Reed');
console.log(student1);





//a. xxx
 const student = {
   id: 1,
   name: "Reed",
   subjects: [],
   addSubject(subject) {
     this.subjects = [...this.subjects, subject];
   }
 }
 student.addSubject('Math');
 console.log(student.subjects);

//b. using constructor function to add function addSubject.
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}
 const student1 = new Student(1, 'Reed');
 const student2 = new Student(2, 'Doug');
 
 student1.addSubject('Math');
 student2.addSubject('Physics');

 console.log(student1.subjects);
 console.log(student2.subjects);

 console.log(student1);
 console.log(student2);



 // xxx
// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.themes = themes;
}
//1
const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");

console.log(book1.title);
console.log(book2.title);

ans:Lord of the Rings
>  :The Trial

//2
Book.prototype.addTheme = function(newTheme) {
	this.themes = [...this.themes, newTheme];
}

book1.addTheme("Fantasy");
book2.addTheme("Corruption");

console.log(book1.themes);
console.log(book2.themes);

ans:["Fantasy"]
>["Corruption"]

xxx
// prototypical inheritance - each instantiated objecte.g new student inherits from prototype

// every object has prototype

// console.log(new Object());
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, 'Reed');

console.log(Object.getPrototypeOf(student1).constructor);
ans:Student(id, name, subjects = []