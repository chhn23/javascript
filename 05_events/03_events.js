const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date().toLocaleTimeString();
  console.log(date);
  clock.innerHTML = date;
}, 1000);
