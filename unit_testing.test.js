// sum.test.js
import { expect, it, describe } from "vitest";
import { add, stringLength } from "./unit_testing";

it("should return a length of string", () => {
  const testCase = "numbers";
  const expectedResult = testCase.length;
  //   Act
  const result = stringLength(testCase);
  //   Assert
  expect(result).toBe(expectedResult);
  expect(stringLength("")).toBe(0);
});

it("should return an error if no string is provided", () => {
  const testCase = 5;
  const result = stringLength(testCase);
  expect(isNaN(result)).toBe(true);
  expect(() => stringLength()).toThrow();
  expect(() => stringLength(undefined)).not.toBeUndefined();
});

// make a suite or make a group
describe("validationAdd()", () => {
  it("return sum of a number array", () => {
    // arrange
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = numbers.reduce((acc, cur) => acc + cur);

    //   Act
    const result = add(numbers);

    //   Assert
    expect(result).toBe(expectedResult);
  });

  it("return correct sum of array of number if any element is numeric string", () => {
    // arrange
    const numbers = ["1", "2", "3", "4", "5"];
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

    //   Act
    const result = add(numbers);

    //   Assert
    expect(result).toBe(expectedResult);
  });

  it("return NaN if any element is invalid number", () => {
    // arrange
    const numbers = [1, 2, "Invalid", 4, 5];

    //   Act
    const result = add(numbers);

    //   Assert
    expect(result).toBeNaN();
  });

  it("should throw an error if no argument is passed", () => {
    const resultFunction = () => {
      add();
    };
    expect(resultFunction).toThrow();
  });

  it("should throw an error if multiple value is provided", () => {
    const resultFunction = () => {
      add(1, 2, 3);
    };
    expect(resultFunction).toThrow(/is not iterable/i);
  });
});
