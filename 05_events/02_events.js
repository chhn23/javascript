const form = document.querySelector("form");
//const height = parseInt(document.querySelector("#height").value); //this will give empty values
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value); //if we add these lines out of this listener it will take empty values as well
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (
    isNaN(height) ||
    height < 0 ||
    height === "" ||
    weight < 0 ||
    weight === "" ||
    isNaN(weight)
  ) {
    results.innerHTML = "Please enter valid inputs";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
