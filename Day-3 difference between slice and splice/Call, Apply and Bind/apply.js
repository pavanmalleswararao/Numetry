const numbers = [5, 6, 2, 3, 7];

// Using Math.max with apply to find the maximum element in the array
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 7
