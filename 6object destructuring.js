// xxx Property destructuring(cutting out a fraction frm d object)
const user = {
  name: "Reed",
  username: "Reedbarger",

	email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

const { username, email } = user;

function displayUser() {
  console.log(`username: ${username}, email: ${email}`);  
}

displayUser()	 
	 
	 
// xx--XMLDocument
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

// const { title } = user.details
const { name, details: { title} } = user;

function displayUserBio() {
  console.log(`${name} is a ${title}`); 
}

displayUserBio()
	 
xx-OR shorter-write by putting the destructure inside the function argument.
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};
// const { title } = user.details
// const { name, details: { title} } = user;

function displayUserBio({ name, details: { title } }) {
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user);
	 
	 xxxexercise
	 // Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}
1:
const { beer, coffee } = recommendations;
console.log(beer,coffee);
2:	 
const { traditional, jazz } = recommendations.music;
console.log(jazz)
or 2:
const { music: { traditional, jazz } } = recommendations;
console.log(jazz)
3a:
	 function displayMusicPlaces({ music: { traditional, jazz } }) {
    console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
}

displayMusicPlaces(recommendations);
