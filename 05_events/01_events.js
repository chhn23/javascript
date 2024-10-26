const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach(function (button) {
  button.addEventListener(
    "click",
    function (e) {
      console.log("event is:::", e);
      console.log(e.target);
      if (e.target.id === "red") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "yellow") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "green") {
        body.style.backgroundColor = e.target.id;
      }
    },
    false
  );
});
