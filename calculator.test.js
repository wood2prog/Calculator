" use strict";
import { expect, test } from "vitest";
import * as calc from "./calculator.js";

test("should return 9 given 4, 5 and '+'", () => {
  expect(calc.doMath(4, "+", 5)).toBe(9);
});

test("should return -1 given 4, 5 and '-'", () => {
  expect(calc.doMath(4, "-", 5)).toBe(-1);
});

test("should return 20 given 4, 5 and '*'", () => {
  expect(calc.doMath(4, "*", 5)).toBe(20);
});

test("should return 4 given 20, 5 and '/'", () => {
  expect(calc.doMath(20, "/", 5)).toBe(4);
});
