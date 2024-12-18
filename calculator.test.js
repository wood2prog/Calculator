" use strict";
import { expect, test } from "vitest";
import * as calc from "./calculator.js";

test("should return 9 given 4, 5 and '+'"),
  () => {
    expect(calc.doMath(4, "+", 5)).toBe(9);
  };
