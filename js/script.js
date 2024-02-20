{

  const calculateResult = (amount, currency) => {

    const currencyEUR = 4.71;
    const currencyUSD = 4.33;
    const currencyGBP = 5.37;

    switch (currency) {
      case "EUR":
        return amount / currencyEUR;
      case "USD":
        return amount / currencyUSD;
      case "GBP":
        return amount / currencyGBP;
    }
  };


  const init = () => {
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const currency = document.querySelector(".js-currency");
      const quantity = document.querySelector(".js-quantity");
      const result = document.querySelector(".js-result");

      const amountValue = +quantity.value;
      const currencyValue = currency.value;

      const resultValue = calculateResult(amountValue, currencyValue);
      result.innerHTML = `${amountValue.toFixed(2)} PLN = <strong>${resultValue.toFixed(2)} ${currencyValue}</strong>`;

    })
  }
  init();
}