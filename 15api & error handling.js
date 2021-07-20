// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)


//fetch is used basically for promises

//1. GET /posts/1 - single blog post
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data.title))


//2. POST sending to https...../posts you pass a configuration object as the 2nd agurment
const blogPost = {
  title: "Cool post",
  body: "lkajsdflkjasjlfda",
  userId: 1  
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  headers: {
     "Content-Type": "application/json" 
  },
  body: JSON.stringify(blogPost) //send to post-url
})
  .then(response => response.json())
  .then(data => console.log(data))

// xxxx3. error handling
// note; if u have a failed,the promise will run but the catch will not show a visible error so you have to manually set it,using our own error message or error statuscode
fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => {
      if (!response.ok) {
          throw new Error('Oops!'); //using our own error message
//        throw new Error(response.status);  //using error statuscode
      }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))



// / check this out--list of API, no authentic/API key to use it
 // https://github.com/public-apis/public-apis 




// Challenge: 
 //1 Fetch the JSON Placeholder API which has /users endpoint, 
//2 log out the response, just like the one we saw in the tutorial for /posts
//3 Get the user with ID 3 and log their name and company they work for.
//4 log log out name person.name works for person.company.name
//5 Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3
//1
fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => {
   return response.json();
})
//2
.then(person => {
    console.log(person)
});
// ans: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {street: "Douglas Extension", suite: "Suite 847", city: "McKenziehaven", zipcode: "59590-4157", geo: {lat: "-68.6102", lng: "-47.0653"}}, phone: "1-463-123-4447", website: "ramiro.info", company: {name: "Romaguera-Jacobson", catchPhrase: "Face to face bifurcated interface", bs: "e-enable strategic applications"}}
//3
.then(person => {
    console.log(person.name);
    console.log(person.company.name);
});
// ans:Clementine Bauch
// >Romaguera-Jacobson
//4
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
});
// ans:Clementine Bauch works for Romaguera-Jacobson

//5 Handle errors if something does not quite work -using .catch 
fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
})
 .catch(err => console.log(err));

ans:no error-Clementine Bauch works for Romaguera-Jacobson
ans:error-404.(try to alter the code a little-it will give you error)


// XXX HANDLING PROMISES using async function NEW WAY resolving promises and immediately storing it in a variable(like async)
// xxxusing async function
async function getBlogPost() {}

getBlogPost().then(() => console.log('works as a promise'));

//or simple old
async function getBlogPost() {
  return 'works here too!';  
}

getBlogPost().then(value => console.log(value));

// xxx old way
function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('blog post'), 1000);
  });
  
  promise
    .then(value => console.log(value))
    .finally(() => console.log('done'));
}

getBlogPost()


// xxx NEW WAY storing it in a variable + asyn function+ await promise(blog post) 
async function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('blog post'), 1000);
  });
   
  const result = await promise;
  console.log(result);
  console.log('done');
}
getBlogPost()

ans:blog post
>done

// xxx NEW WAY storing it in a variable + asyn function + await fetch(api)
// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));
async function getPost() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
   const data = await response.json();
   console.log(data);
}
getPost();

ans:{userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"}


// XXXX HANDLING ERRORS
NOTE: normally an async funtion is suppose to silently fail// promise.reject--failed promise 
async function runAsync() {
  await Promise.reject();
    console.log('hi');
}

runAsync();//does not show the Error


// xxx Catch asyn &syn errors using try/catch method    
xxxx
NOTE-await helps to covert reject/fail promises to errors&catch them as errors,normally it fail silently
    - await can also catch normal errors(syn)e.g Cannot set property 'someProperty' of null                              
     - when you add async to funtion its always returns promise                               
                                     
//xxxx promise.reject + catch async-reject errror
async function runAsync() {
  try { 
    await Promise.reject(Error('Oops'));  
  } catch (error) {
    console.error(error); 
  }  
}

runAsync(); // shows the Error
ans error:oops

// xxxx promise.resolve + catch sync error
async function runAsync() {
  try { 
    await Promise.resolve('hello world'); 
    null.someProperty = true; 
  } catch (error) {
    console.error(error); 
  }  
}
runAsync();
ans:TypeError: Cannot set property 'someProperty' of null


// catch asyn-reject error not just return empty{}: add or remove await
async function runAsync() {
  return await Promise.reject(Error('Oops')); 
}

runAsync().catch(error => console.error(error));


xxxExample: catching error using try/catch + if/.ok
async function getGithubUser() {
  try {    
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');// error here
    if (!response.ok) {
      throw new Error(response.status);  
    }
  } catch (error) {
    console.error(error);  // not showing message to user but showing eeror status in console
  } 
}
getGithubUser();


// xxxxExample: to notify user of error
async function getGithubUser() {
  try {    
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');// error here
    if (!response.ok) {
      throw new Error(response.status);  
    }
  } catch (error) {
    console.log('Could not fetch user, try resetting your connection');//showing eeror message in console
//	  or alert('Could not fetch user, try resetting your connection');//showing eeror message to user
// or alert(error.message);

 
  } 
}
getGithubUser();



xxx// Challenge tip: 

// Pseudo steps for the solution
//A.GET API call & catch error the normal way using .then/.catch
        //if response is not ok - throw an error
        // if response is ok - remember that response.json is a promise,so it needs to be awaited. 

      //B. Rewrite the GET API call from the above challenge using async-await &.test if reponse can log out.  
        // create a function getUser()
        // await fetch call & Store the result in a variable
       // test if reponse can log out.

//C. Log the response with person's details to the console.not just response//update the above 
       // Log the message with person's details to the console.

//D. catch any errors using asyn/try/catch & display errors in the console
       // catch any errors & display errors in the console


//A.GET API call & catch error the normal/old way using .catch
 fetch('https://jsonplaceholder.typicode.com/users/3')
   .then(response => {
       if (!response.ok) {
         throw new Error(response.status); //if response is not ok - throw an error 
       }
      
       return response.json()//if response is ok -remember that response.json is a promise,so it needs to be awaited. 

   })
   .then(person => console.log(`${person.name} works for ${person.company.name}`))
   .catch(err => console.error(err))


//B. Rewrite the GET API call from the above challenge using async-await &.test if reponse can log out.
async function getUser() { // create a function getUser()
  const response = await fetch('https://jsonplaceholder.typicode.com/users/3');//await fetch call & store in a variable

 console.log(response)//test if console.log can log out  reponse.
}
getUser()

ans:response

//C. Log the response with person's details to the console.not just response//update the above 
async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//  console.log(response)
  const person = await response.json();
  console.log(person)
}

getUser()

ans:{id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {street: "Douglas Extension", suite: "Suite 847", city: "McKenziehaven", zipcode: "59590-4157", geo: {lat: "-68.6102", lng: "-47.0653"}}, phone: "1-463-123-4447", website: "ramiro.info", company: {name: "Romaguera-Jacobson", catchPhrase: "Face to face bifurcated interface", bs: "e-enable strategic applications"}}


//D. catch any errors using asyn/try/catch & display errors in the console
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/uses/3');//error here-uses/users
    if (!response.ok) {
      throw new Error(response.status);
    }
    const person = await response.json();
    console.log(person);    
  }
    catch (error) {
      console.log(error);
  }

}

getUser()
	ans: error: 404

  
/////////////practise
async function getUser() {
  try{     
    const response =await fetch('https://jsonplaceholder.typicode.com/users/3')
    if(!response.ok){
      throw new Error(response.status);
    }
const user = await response.json();
console.log(user)
}
catch (error){
console.log(error)
}
}
getUser()
