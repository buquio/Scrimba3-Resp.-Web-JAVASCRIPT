// const student = {
//   id: 1,
//   name: " ",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
// or use constructor function to add function addSubject.
function Student(id, name, subjects = []) {
 this.id = id;
 this.name = name;
 this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
 this.subjects = [...this.subjects, subject];   
}
// const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug');

// console.log(student1);
console.log(student2);

// student1.addSubject('Math');
student2.addSubject('Physics');

// console.log(student1);
console.log(student2);

// console.log(student1.subjects);
console.log(student2.subjects);