"use strict";

const formButton = document.querySelector("button");
const amountInput = document.querySelector("#amount");
const taxInput = document.querySelector("#taxPerc");
const facitDisplay = document.querySelector("h2");

formButton.addEventListener("click", function (e) {
  let amount = +amountInput.value;
  let tax = +taxInput.value;
  facitDisplay.innerText = "";
  e.preventDefault();
  const division = (amount / 100) * tax;
  const facit = amount - division;

  facitDisplay.append(facit);
});
