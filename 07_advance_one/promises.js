// fetch('https://google.com').then().catch().finally()
const promise1 = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls
  //cryptographic related
  //network
  setTimeout(function () {
    console.log("async task in progress");
    resolve();
  }, 1000);
});

//then is related to resolve() present inside setTimeout
promise1.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "deepak",
      email: "code@code.com",
    });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "deepak from promise4",
        email: "code4@code.com",
      });
    } else {
      reject("something went wrong!!");
    }
  }, 1000);
});

promise4
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => console.log("hello ", username))
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("promise is either resolved or rejected"));

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "deepak from promise5",
        email: "code5@code.com",
      });
    } else {
      reject("something went wrong!!");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    //ITS imp to use try catch
    const response = await promise5;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromise5();

// async function fetchAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     //console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
