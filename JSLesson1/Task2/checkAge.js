//Create a program that evaluates whether a given age qualifies for a child (0-12), teenager (13-19), or adult (20+).

const age = prompt("Enter a positive number: ");

if (age >= 0 && age <= 12) {
  alert("child");
} else if (age > 12 && age <= 19) {
  alert("teenager");
} else {
  alert("adult");
}
