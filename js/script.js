console.log("siemanko!");

let currency = document.querySelector(".js-currency");
let quantity = document.querySelector(".js-quantity");
let result = document.querySelector(".js-result");
let form = document.querySelector(".js-form");

let currencyEUR = 4.71;
let currencyUSD = 4.33;
let currencyGBP = 5.37;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let currencyValue = currency.value;
  let quantityValue = quantity.value;

  switch (currencyValue) {
    case "EUR":
      resultValue = quantityValue / currencyEUR;
      break;
    case "USD":
      resultValue = quantityValue / currencyUSD;
      break;
    case "GBP":
      resultValue = quantityValue / currencyGBP;
      break;
  }
  result.innerText = resultValue.toFixed(2);
});
