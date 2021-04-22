//Exercise 0 - Second Largest Number
/*
const secondLargestNumber = (numbers) => {
  let first = numbers[0];
  let second = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > first) {
      second = first;
      first = numbers[i];
    }
    if (numbers[i] > second && numbers[i] < first) {
      second = numbers[i];
    }
  }
  return second;
}
*/
const secondLargestNumber = (numbers) => {
  numbers.sort((a, b) => a - b);
  //sort method works with string
  //to work with numbers the compare function can substract b from a.
  numbers.reverse();
  return numbers[1];
}

const nums = [8, 3, 7, 4, 7, 2, 10, 11];
//console.log(secondLargestNumber(nums));

//Exercise 1 - Light a candel--------------------
let candelIsLit = false;
const isCandleLit = () => {
  if (!candelIsLit) {
    console.log('search for matches or a lighter');
    candelIsLit = true;
  } else {
    console.log('Is Lit');
  }
}
//isCandleLit();

//Exercise 2 - Countdown-------------------------
const countdown = (time = 5) => {
  let secs = 1;
  for (let i = time; i >= 0; i--) {
    secs += 1;
    setTimeout(() => {
      console.log(i);
      if (i === 0)
        console.log('Happy New Year!!!')
    }, 1000 * secs);
  }
}
//countdown();
