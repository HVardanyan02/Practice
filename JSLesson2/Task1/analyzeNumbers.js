/*Write a function analyzeNumbers(arr) that takes an array of numbers and returns an object containing:

The sum of all numbers
The average
The highest and lowest number
A new array with only the even numbers*/

function analyzeNumbers(arr) {
  let sum = 0;
  let len = arr.length;

  if (len === 0) {
    return {};
  }

  let max = arr[0];
  let min = arr[0];
  const evens = [];

  for (let i = 0; i < len; i++) {
    sum += arr[i];

    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];

    if (arr[i] % 2 === 0) evens.push(arr[i]);
    // const evens = arr.filter(num => num % 2 === 0);
  }

  const avg = parseFloat((sum / len).toFixed(2));

  return { sum, avg, max, min, evens };
}

console.log(analyzeNumbers([3, 7, 2, 10, 5, 8]));
console.log(analyzeNumbers([]));

function getUserInput() {
  const input = prompt("Enter numbers separated by spaces:");
  return input.split(" ").map(Number);
}

const userArray = getUserInput();
console.log(analyzeNumbers(userArray));
