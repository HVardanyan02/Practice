// Write a function flattenObject(obj) that takes a nested object and flattens it, using dot notation for nested keys.

const flattenObject = (obj) => {
  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      const temp = flattenObject(obj[key]);
      for (let prop in temp) {
        result[key + "." + prop] = temp[prop];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

const data = {
  user: {
    name: "John",
    address: { city: "NY", zip: 10001 },
  },
  age: 30,
};

console.log(flattenObject(data));
