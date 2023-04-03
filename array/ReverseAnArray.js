function customReverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

let myArray = [1, 2, 3, 4, 5];

console.log("Original Array => " + myArray);

customReverse(myArray);

console.log("Reversed Array => " + myArray);
