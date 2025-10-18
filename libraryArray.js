// Task 1: Create a multi-dimensional array (3 shelves x 3 items each)
let library = [
    ["Book1", "Book2", "Book3"],      // Shelf 1
    ["Movie1", "Movie2", "Movie3"],   // Shelf 2
    ["Book4", "Movie4", "Book5"]      // Shelf 3
];

// Task 2: Access and log all elements using numbers
console.log(library[0][0], library[0][1], library[0][2]);
console.log(library[1][0], library[1][1], library[1][2]);
console.log(library[2][0], library[2][1], library[2][2]);

// Task 3: Access and log all elements using variables as indices
for (let row = 0; row < library.length; row++) {
    for (let item = 0; item < library[row].length; item++) {
        console.log(library[row][item]);
    }
}

// Task 4: Print all items on the second shelf
for (let item = 0; item < library[1].length; item++) {
    console.log("Second Shelf Item:", library[1][item]);
}