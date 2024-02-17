const validStringIsNotEmpty = (str) => {
  if (str == "") {
    throw new Error("Is empty.");
  }
};
const validNumber = (num) => {
  if (isNaN(num)) {
    throw new Error("Not a number.");
  }
};

export const cleanNumbers = (inputNUmbers) => {
  const numbers = [];
  for (const numberInput of inputNUmbers) {
    validStringIsNotEmpty(numberInput);
    const number = +numberInput;
    validNumber(number);
    numbers.push(number);
  }
  return numbers;
};
