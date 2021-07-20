
// state - data to be managed/tracked in app
// state -> status
//its a pure function-has a counter

class App {
  constructor() {
    this.state = {
       isAuth: false,
       error: ''  
    };  
      
    this.checkAuth();
    this.render();
//    this.$userMessage = document.getElementById("user-message");
  }

  checkAuth() {
    const user = true;
    if (user) {
      this.state = { ...this.state, isAuth: true };// no messege alert.
    //   this.$userMessage.textContent = "Welcome back!";
    } else {
      this.state = { ...this.state, error: "You must sign in!" };//message alert
    //   this.$userMessage.textContent = "You must sign in!";
    //   this.$userMessage.style.color = "red";
    }
  }

  render() {
    document.getElementById("root").innerHTML = `
      <div>
        <span id="user-message"></span>
      </div>
    `;
	  
//	    render() {
//    const { isAuth, error } = this.state; 
//      
//    document.getElementById("root").innerHTML = `
//      <div style="color: ${error && 'red'}">
//        ${isAuth ? 'Welcome back!' : error}
//      </div>
//    `;

  }
}

new App();



Reducers
// reducers - helps us manage app state
// (state, action) => newState;


// xxx with state e.g count
function counterReducer(count, action) {
  return count + 1;  
}

console.log(counterReducer(0) === 1);


// xxx with action-type by returning count e.g increment/decrement
function counterReducer(count, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;  
    case 'DECREMENT':  
      return count - 1;
    default:
      return count;
  }  
}

counterReducer(0, { type: 'INCREMENT' }); // 1
const result = counterReducer(1, { type: 'DECREMENT' }); // 0
console.log(result === 0);

xxx1b
// reducers - helps us manage app state by returning state.count
 //(state, action) => newState;

 function counterReducer(state, action) {
   switch (action.type) {
     case 'INCREMENT':
       return { ...state, count: state.count + 1 }; 
     case 'DECREMENT':  
       return { ...state, count: state.count - 1 }; 
     default:
       return state;
   }  
 }

 counterReducer(0, { type: 'INCREMENT' }); // 1
 const result = counterReducer(1, { type: 'DECREMENT' }); // 0
 console.log(result === 0);


xxx  format 
function userReducer(state, action) {
  switch (action.type) {
     case "CHANGE_NAME":
       return { ...state, name: action.payload.name };
     case "CHANGE_EMAIL":
       return { ...state, email: action.payload.email };
     default:
       return state; 
  }  
}
{ type: 'CHANGE_NAME', payload: { name: 'Joe' } }
// or { type: 'CHANGE_EMAIL', payload: { email: 'joe@gmail.com' } }



// xxx real example1
const initialUser = {
  name: 'Mark',
  email: 'mark@gmail.com'  
};

function userReducer(state, action) {
  switch (action.type) {
     case "CHANGE_NAME":
       return { ...state, name: action.payload.name };
     case "CHANGE_EMAIL":
       return { ...state, email: action.payload.email };
     default:
       return state; 
  }  
}

const result = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'mark@compuserve.com' } });
console.log(result.email === 'mark@compuserve.com');

ans:true
