export const add = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
};

export function stringLength(str) {
  return str.length;
}

export function s(str) {
  return str.length;
}
