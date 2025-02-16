/*Write a function transformPeople(people) that takes an array of objects, where each object represents a person with name, age, and city, and returns a transformed array where:

The names are in uppercase
The ages are increased by 5
The city names are reversed*/

//Version 1
function transformPeople(people) {
  return people.map((person) => ({
    name: person.name.toUpperCase(),
    age: person.age + 5,
    city: person.city.split("").reverse().join(""),
  }));
}
const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
];

console.log(transformPeople(people));

//Version 2
function transformPeople1(people) {
  const transformedPeople = [];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const transformedPerson = {
      name: person.name.toUpperCase(),
      age: person.age + 5,
      city: person.city.split("").reverse().join(""),
    };
    transformedPeople.push(transformedPerson);
  }
  return transformedPeople;
}

const people1 = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
];

console.log(transformPeople1(people1));
