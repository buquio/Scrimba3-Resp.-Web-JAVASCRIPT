xxx  => function arrow

//normal way
const username = 'john';

function capitalizeName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}
 console.log(capitalizeName(username));

xxxfunction arrow =>for above
const username = 'john';
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
console.log(capitalize(username));

xxx callbackfunction
const username = 'john';
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
function greetUser(name, callback) { //execute capitalise fxn within greetUser fxn.
  return callback(capitalize(name)); //takes the result from capitalize fxn,uses it as an argument 
}

//greetUser(username, function() {}); //callback function
const result = greetUser(username, name => `Hi there, ${name}!`);
console.log(result);

xxx normal way
function splitBill(amount, numPeople) {
    return `Each person needs to pay ${amount / numPeople}`
}
console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
 console.log(splitBill(10, 5));

xxx using arrow function
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
 console.log(splitBill(10, 4));
 console.log(splitBill(10, 5));


//xxx
// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}

ans using function arrow:
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);
// const countingDown = countdown(40, 2);

 console.log(countingDown());
 console.log(countingDown());
 console.log(countingDown());


xxxPartial application-using higher function to preserve data thru closures(helps to remember the data passed into it) 
2.function with values that are preserved.
 
function getData(baseUrl, route) {
  fetch(`${baseUrl}${route}`)
    .then(response => response.json())
    .then(data => console.log(data));  
}

getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');



xxx partial application
function getData(baseUrl) {  //	helps to remember the data passed into it
  return function(route) {   //	helps to remember the data passed into it 
    fetch(`${baseUrl}${route}`)
    .then(response =>  response.json())
    .then(data => console.log(data));  
  }  
}
//**this retrieve the whole https data +site
const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

//**this retrieve the whole https data + site-posts or site-comments
getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');

//**this will only retrieve the comment or posts once
getSocialMediaData('/comments');
//or getSocialMediaData('/posts');


xxx to get post-HTML-Title:use callback
function getData(baseUrl) {
  return function(route) { 
    return function(callback) {    
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
    }     
  }  
}

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));  
});
// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');

xxx converting the above to arrow function
const getData = baseUrl => route => callback =>  
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
        

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));  
});
// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');




// functions - actions

// create a todo
function createTodo() {}

// update a todo
function updateTodo() {}

// check off todo
function checkCompleteTodo() {}

// delete todo
function deleteTodo() {}

// getting a todo
function getTodo() {}

// getting user
function getUser() {}