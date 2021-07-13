import { getDate, year } from './utils/date.js';

// Modules - allow us to share code between files
class App {
  constructor() {
    this.render()  
  }  
  
  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDate()}, Year: ${year}</div>
    `
  }
}

// import / export

new App()



//xxxxdefault export - added const year there4 updated getDate to getDateNow
// --to differencaite year from year in getDate.

 import getDateNow from './utils/date.js';

const year = 2019;
class App {
  constructor() {
    this.render()  
  }  
  
  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: ${getDateNow()}</div>   `
  }
}

// import / export

new App()


xxxx// exercise Challenge:
// Often in development you can reuse someone else's code. 
// In this challenge we have a fake function that imitates getting user's 
// data from an API and return you some details.  
// Use modules to import getUser function and display the data on screen.
// Don't forget to call new App() in the end.

// Challenge stub code: 
import getUser from './utils/getUser.js';

class App {
  constructor() {
    this.render();
  } 
  
  render() {
    const user = getUser();
    console.log(user);
    document.getElementById('root').innerHTML = `
      <div>${user.name} works for ${user.company}</div>
    `
  }
}

new App();