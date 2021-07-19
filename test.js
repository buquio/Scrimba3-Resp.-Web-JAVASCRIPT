const user = {
  name: 'John',
  age: 29  
};
// a.
const ageExists = Object.keys(user).includes('age');
console.log(ageExists);
// b.
 console.log(Object.values(user));
// or
 const values = Object.keys(user).map(key => user[key]);
 console.log(values);
