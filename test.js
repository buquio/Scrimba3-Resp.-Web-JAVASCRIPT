const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);  
  });
  
  promise.then(() => console.log('success')).catch(() => console.log('failure'));
  