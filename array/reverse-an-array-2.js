let numbersArray = [1, 2, 3, 4, 5];

let reversedNumbers = [];

for (let i = numbersArray.length - 1; i >= 0; i--) {
  reversedNumbers.push(numbersArray[i]);
}

console.log("Original Array => " + numbersArray);

console.log("Reversed Array => " + reversedNumbers);