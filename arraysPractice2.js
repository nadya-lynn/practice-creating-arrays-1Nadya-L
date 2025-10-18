// Task 1: Initialize the Array
let greetings = Array(7).fill("Hello");
console.log("Task 1 - Full Array:", greetings);

// Task 2: Update part of the Array
// Let's update the first 3 slots to "Hi"
greetings.fill("Hi", 0, 3);
console.log("Task 2 - Updated Array:", greetings);

// Task 3: Populate the Array with a for Loop
let numbers = Array(5); // create array of size 5
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i * 10;
}
console.log("Task 3 - Populated Array:", numbers);