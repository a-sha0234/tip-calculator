"use strict";

//selectors
const sel_bill = document.querySelector(".bill");
const sel_no_people = document.querySelector(".people");
const btn = document.querySelectorAll(".btn");
const tip_perPerson = document.querySelector(".tip_amount_per_person");
const total_Amount = document.querySelector(".total_amount_per_person");
const reset = document.querySelector(".reset");

//globals

//event listners

btn.forEach(function (btn) {
  //select all at the same time
  btn.addEventListener("click", function (e) {
    const tip = e.currentTarget.classList;
    if (tip.contains("five")) {
      tip_perPerson.textContent = "£" + calculate(5);
      total_Amount.textContent = "£" + totalAmount(5);
    } else if (tip.contains("ten")) {
      tip_perPerson.textContent = "£" + calculate(10);
      total_Amount.textContent = "£" + totalAmount(10);
    } else if (tip.contains("sep")) {
      tip_perPerson.textContent = "£" + calculate(15);
      total_Amount.textContent = "£" + totalAmount(15);
    } else if (tip.contains("twentyfive")) {
      tip_perPerson.textContent = "£" + calculate(25);
      total_Amount.textContent = "£" + totalAmount(25);
    } else if (tip.contains("fifty")) {
      tip_perPerson.textContent = "£" + calculate(50);
      total_Amount.textContent = "£" + totalAmount(50);
    } else {
      tip_perPerson.textContent = "Invalid";
    }
  });
});

reset.addEventListener("click", function () {
  //reset button
  sel_bill.value = ""; //use value function as its a number
  sel_no_people.value = "";
  tip_perPerson.textContent = ""; // textcontent as its a string
  total_Amount.textContent = "";
});

//functions

function calculate(tip) {
  //calculate tip per person
  const total_bill_before = sel_bill.value;
  const people = sel_no_people.value;
  return Math.round(((tip / 100) * total_bill_before) / people);
}

function totalAmount(val) {
  //calculate total bill per person
  // problem fixed: when adding the bill to the tip the values were concatinating, not sure why
  const total_bill = sel_bill.value;
  const people = sel_no_people.value;
  const totalTip = (val / 100) * total_bill;
  return Math.round((Number(total_bill) + Number(totalTip)) / people);
}
