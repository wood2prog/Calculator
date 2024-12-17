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
const arrow = document.getElementById("arrow");

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
const decimal = document.getElementById("decimal");

let isInMemoryMode = true;
let totalValueInMemory = 0;
let valueOnScreen = "0";

const toggleSignsOff = function () {
  modeDivision.classList.add("hidden");
  modeMultiplication.classList.add("hidden");
  modeSubtraction.classList.add("hidden");
  modeAddition.classList.add("hidden");
};

const updateScreen = function (num) {
  document.querySelector("#numeric-output").value = num;
};

// initialize the screen on startup
updateScreen(totalValueInMemory);

const addDigit = function (digit) {
  if (valueOnScreen === "0") {
    valueOnScreen = String(digit);
  } else if (valueOnScreen.length <= 8) {
    valueOnScreen += String(digit);
  }
  updateScreen(valueOnScreen);
};

const addDecimal = function () {
  if (!valueOnScreen.includes(".")) {
    valueOnScreen += ".";
  }
  updateScreen(valueOnScreen);
};

modeMEx.addEventListener("click", () => {
  modeMEx.style.borderColor = "rgb(23, 23, 23)";
  isInMemoryMode ? false : true;
  modeMemory.classList.toggle("hidden");
  modeExch.classList.toggle("hidden");
});

arrow.addEventListener("click", () => {
  totalValueInMemory = totalValueInMemory;
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
  addDigit("0");
});

one.addEventListener("click", () => {
  addDigit("1");
});

two.addEventListener("click", () => {
  addDigit("2");
});

three.addEventListener("click", () => {
  addDigit("3");
});

four.addEventListener("click", () => {
  addDigit("4");
});

five.addEventListener("click", () => {
  addDigit("5");
});

six.addEventListener("click", () => {
  addDigit("6");
});

seven.addEventListener("click", () => {
  addDigit("7");
});

eight.addEventListener("click", () => {
  addDigit("8");
});

nine.addEventListener("click", () => {
  addDigit("9");
});

allClear.addEventListener("click", () => {
  valueOnScreen = "0";
  totalValueInMemory = 0;
  updateScreen(valueOnScreen);
});

decimal.addEventListener("click", () => {
  addDecimal();
});
