"use strict";

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

const modeMEx = document.getElementById("mode-m-ex");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const addition = document.getElementById("addition");

let isInMemoryMode = true;

const toggleSignsOff = function () {
  modeDivision.classList.add("hidden");
  modeMultiplication.classList.add("hidden");
  modeSubtraction.classList.add("hidden");
  modeAddition.classList.add("hidden");
};

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
