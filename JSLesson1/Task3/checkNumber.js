// Write a program that checks if a number is positive, negative, or zero.

const number = prompt("Enter a number: ");

if (number < 0) {
  alert("negative");
} else if (number == 0) {
  alert("zero");
} else {
  alert("positive");
}