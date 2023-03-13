// take number as parameter log out to console every number from 1 to num.
//if num divisible by 3 than fizz
//if num divisible by 5 than buzz
// if divisible by both print FizzBuzz
// learn modulus operator
// it give remainder afer dividing a num

console.log(100 % 30);

// for this we will loop through every number form 1 to num
function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(30);

/* if we put the last condition at last it will not run because it will check the first condition first than second condition than third  */
// instead of writing i%5 && i%3 ==0 we can write i%15
