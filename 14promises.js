// callbacks -> promises

// States of a promise:
//1. pending
//2.fulfilled
//3.rejected

xxxx
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});
console.log(promise);

xxxx promises invoke then() and catch()
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});

promise.then(() => console.log('success')).catch(() => console.log('failure'));
//ans sucess
xxxx insert value so that it shows done not sucess
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});

promise.then(value => console.log(value)).catch(() => console.log('failure'));
//ans done

xxxx for reject
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 1000);  
});

promise.then(value => console.log(value)).catch(() => console.log('failure'));
//ans failure

xxxshowing error not failure
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed.')), 1000);  
});

promise.then(value => console.log(value)).catch(error => console.error(error));

xxxxrearranged & added finally
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed.')), 1000);  
});
promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));


xxxxx
// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
// });
or xxx using promise.
const promise = new Promise((resolve, reject) => {
   navigator.geolocation.getCurrentPosition(position => {
    resolve(position); 
  }, error => {
     reject(error);
  }); 
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));

xxx making the above minified
const promise = new Promise((resolve, reject) => {
   navigator.geolocation.getCurrentPosition(resolve, reject); 
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));
