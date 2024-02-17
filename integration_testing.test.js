import { expect, it } from "vitest";
import { cleanNumbers } from "./integration_testing";

it("should return an array of numbers if an array of string number is provided", () => {
  const numbers = ["1", "2", "3", "4", "5"];

  const result = cleanNumbers(numbers);

  //   Assert
  expect(result[0]).toBeTypeOf("number");
});

it("should return an error if empty string is provided", () => {
  const numbers = ["", "2", "3", "4", "5"];

  const resultFun = () => cleanNumbers(numbers);
  //   Assert
  expect(resultFun).toThrow();
});
