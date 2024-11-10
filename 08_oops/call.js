function setUserName(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  this.email = email;
  this.password = password;
  setUserName.call(this, username); //to hold the reference of called method in -> this(passed as arguments) if you dont use call then username wont get set although setusername() will be called
}

let user1 = new createUser("deepak", "mail@gmail.com", "1234");
console.log(user1);
