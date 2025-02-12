// Write a function mergeArrays(arr1, arr2) that merges two arrays, removes duplicates, and returns a sorted array.

function mergeArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  let c = [];

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      c.push(arr2[j]);
      j++;
    } else if (j >= arr2.length) {
      c.push(arr1[i]);
      i++;
    } else if (arr1[i] < arr2[j]) {
      c.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      c.push(arr2[j]);
      j++;
    } else {
      c.push(arr1[i]);
      i++;
      j++;
    }
  }

  return c;
}

console.log(mergeArrays([5, 10, 15, 20], [10, 20, 30, 40]));
console.log(mergeArrays([1, 3, 5], [2, 3, 6, 7]));
