// Q.1 Create a program that asks the user for two numbers and prints their sum.

    let num1 = prompt("Enter the first number:");
    num1 = parseInt(num1);

    let num2 = prompt("Enter the second number:");
    num2 = parseInt(num2);

    let sum = num1 + num2;
    alert('The sum of:'+ num1 +'+'+ num2 +'='+ sum);





// Q.2 Implement a program that calculates the area of a rectangle using given length and width.

    let length = prompt("Enter the length of the rectangle:");
    length = parseInt(length);

    let width = prompt("Enter the width of the rectangle:");
    width = parseInt(width);

    let area = length * width;
    alert("The area of the rectangle is " + area);
  


//Q.3 Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

    
    let Age = prompt("Enter your age:");
    Age = parseInt(Age);

    if (isNaN(Age)) {
      alert("Please enter a valid number for your age.");
    }
    else {
      if (Age >= 18) {
        alert("You are eligible to vote.");
      }
      else {
        alert("You are not eligible to vote.");
      }
    }

//Q.4 Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).


    let grade = prompt("Enter your grade:");
    grade = parseInt(grade);

    if (isNaN(grade)) {
      alert("Please enter a valid number for your grade.");
    }
     else {
      if (grade >= 60) {
        alert("You passed!");
      }
       else {
        alert("You failed.");
      }
    }



//Q.5 Implement a program that checks if a user's entered number is positive, negative, or zero.



    let number = prompt("Enter a number:");
    number = parseInt(number);

    if (isNaN(number)) {
      alert("Please enter a valid number.");
    } else {

      if (number > 0) {
        alert("The number is positive.");
      } else if (number < 0) {
        alert("The number is negative.");
      } else {
        alert("The number is zero.");
      }
    }



//Q.6 Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).



let age = prompt("Enter your age:");
age = parseInt(age, 10);

  if (age >= 0 && age <= 12) {
    alert("You are a child.");
  } else if (age >= 13 && age <= 19) {
    alert("You are a teenager.");
  } else if (age >= 20 && age <= 59) {
    alert("You are an adult.");
  } else if (age >= 60) {
    alert("You are a senior.");
  } else {
    alert("Invalid age entered.");
  }

//Q.7 find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let numbers = [1, 3, 9, 12, 15, 18, 21];

let squares = [];

for (let i = 0; i < numbers.length; i++) {

  let square = numbers[i] * numbers[i];
  squares.push(square);
}
console.log("Original numbers:", numbers);
console.log("Squares of each number:", squares);


//Q.8 Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

function sumOfOddNumbers(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

let limit = 20;
let result = sumOfOddNumbers(limit);
console.log("Sum of odd numbers up to", limit, "is:", result);

