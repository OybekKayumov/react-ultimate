// TODO: Asynchronous JavaScript: Promises
// Promise pending: rejected or fulfilled
// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));  

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => console.log(data ))

console.log('Fetch: ', );  // runs 1st