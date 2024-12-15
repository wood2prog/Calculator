"use strict";
// mode buttons
const modeNegate = document.getElementById("mode-negate");
const modeMemory = document.getElementById("memory");
const modek = document.getElementById("k");
const modeC1 = document.getElementById("c1");
const modeC2 = document.getElementById("c2");
const modeC3 = document.getElementById("c3");
const modeExch = document.getElementById("exch");
const modeAddition = document.getElementById("mode-addition");
const modeSubtraction = document.getElementById("mode-subtraction");
const modeMultiplication = document.getElementById("mode-multiplication");
const modeDivision = document.getElementById("mode-division");

// function buttons
const modeMEx = document.getElementById("mode-m-ex");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const addition = document.getElementById("addition");
const allClear = document.getElementById("all-clear");

// digit buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let isInMemoryMode = true;
let totalValueInMemory = 0;
let valueOnScreen = 0;

const toggleSignsOff = function () {
  modeDivision.classList.add("hidden");
  modeMultiplication.classList.add("hidden");
  modeSubtraction.classList.add("hidden");
  modeAddition.classList.add("hidden");
};

const updateScreen = function (num) {
  valueOnScreen = num;
  document.querySelector("#numeric-output").value = valueOnScreen;
};

// initialize the screen on startup
updateScreen(totalValueInMemory);

modeMEx.addEventListener("click", () => {
  isInMemoryMode ? false : true;
  modeMemory.classList.toggle("hidden");
  modeExch.classList.toggle("hidden");
});

divide.addEventListener("click", () => {
  toggleSignsOff();
  modeDivision.classList.remove("hidden");
});

multiply.addEventListener("click", () => {
  toggleSignsOff();
  modeMultiplication.classList.remove("hidden");
});

minus.addEventListener("click", () => {
  toggleSignsOff();
  modeSubtraction.classList.remove("hidden");
});

addition.addEventListener("click", () => {
  toggleSignsOff();
  modeAddition.classList.remove("hidden");
});

zero.addEventListener("click", () => {
  totalValueInMemory *= 10;
  updateScreen(totalValueInMemory);
});

one.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 1;
  updateScreen(totalValueInMemory);
});

two.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 2;
  updateScreen(totalValueInMemory);
});

three.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 3;
  updateScreen(totalValueInMemory);
});

four.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 4;
  updateScreen(totalValueInMemory);
});

five.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 5;
  updateScreen(totalValueInMemory);
});

six.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 6;
  updateScreen(totalValueInMemory);
});

seven.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 7;
  updateScreen(totalValueInMemory);
});

eight.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 8;
  updateScreen(totalValueInMemory);
});

nine.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory * 10 + 9;
  updateScreen(totalValueInMemory);
});

allClear.addEventListener("click", () => {
  totalValueInMemory = 0;
  updateScreen(totalValueInMemory);
});
