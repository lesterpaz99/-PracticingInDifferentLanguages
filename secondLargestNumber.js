// const secondLargestNumber = (numbers) => {
//   let first = numbers[0];
//   let second = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > first) {
//       second = first;
//       first = numbers[i];
//     }
//     if (numbers[i] > second && numbers[i] < first) {
//       second = numbers[i];
//     }
//   }
//   return second;
// }

const secondLargestNumber = (numbers) => {
  numbers.sort((a, b) => a-b);
  //sort method works with string
  //to work with numbers the compare function can substract b from a.
  numbers.reverse();
  return numbers[1];
}

const nums = [80, 3, 7, 4, 7, 2, 10, 11];
console.log(secondLargestNumber(nums));
