"use strict";

//selectors
const sel_bill = document.querySelector(".bill");
const sel_no_people = document.querySelector(".people");
const btn = document.querySelectorAll(".btn");
const tip_perPerson = document.querySelector(".tip_amount_per_person");
const total_Amount = document.querySelector(".total_amount_per_person");

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
    } else if (tip.contains("sep")) {
      tip_perPerson.textContent = "£" + calculate(15);
    } else if (tip.contains("twentyfive")) {
      tip_perPerson.textContent = "£" + calculate(25);
    } else if (tip.contains("fifty")) {
      tip_perPerson.textContent = "£" + calculate(50);
    } else {
      tip_perPerson.textContent = "Invalid";
    }
  });
});

//functions

function calculate(tip) {
  //calculate tip per person
  const total_bill_before = sel_bill.value;
  const people = sel_no_people.value;
  return ((tip / 100) * total_bill_before) / people;
}

function totalAmount(tip) {
  const total_bill_before = sel_bill.value;
  const people = sel_no_people.value;
  const totalTip = (tip / 100) * total_bill_before;
  return (total_bill_before + totalTip) / people;
}
