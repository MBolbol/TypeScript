"use strict";
// Question: Create a function that takes literal types "red" | "yellow" | "blue" and returns their hexcode colors
function getColorCode(color) {
    switch (color) {
        case "red":
            return "#eb4034";
            break;
        case "blue":
            return "#3440eb";
            break;
        case "yellow":
            return "#ebde34";
            break;
    }
}
console.log(getColorCode("red"));
// Write a function printValueLength that accepts a parameter of type string | string[], string | number[], ...etc. Use type narrowing to safely log the length of the value. (Don't use any)
function printValueLength(value) {
    //   if (typeof value === "string") {
    //     console.log(`String length: ${value.length}`);
    //   } else if (Array.isArray(value)) {
    //     console.log(`Array length: ${value.length}`);
    //   } else {
    //     console.log("Unsupported type");
    //   }
    console.log(value.length);
}
printValueLength("hello"); // "String length: 5"
printValueLength(["a", "b", "c"]); // "Array length: 3"
printValueLength([1, 2]); // "Array length: 2"
printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]); // "Array length: 3"
// Write a generic class myStorage<T> that holds an array of items of type T. Add methods to add items and get all items.
var myStorage = /** @class */ (function () {
    function myStorage() {
        this.items = [];
    }
    // Add an item to the myStorage
    myStorage.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // Get all items from the myStorage
    myStorage.prototype.getItems = function () {
        return this.items;
    };
    return myStorage;
}());
// Usage examples
// Storing strings
var stringmyStorage = new myStorage();
stringmyStorage.addItem("Hello");
stringmyStorage.addItem("World");
console.log(stringmyStorage.getItems()); // ["Hello", "World"]
// Storing numbers
var numbermyStorage = new myStorage();
numbermyStorage.addItem(1);
numbermyStorage.addItem(2);
console.log(numbermyStorage.getItems()); // [1, 2]
// Storing objects
var objectmyStorage = new myStorage();
objectmyStorage.addItem({ name: "Ali" });
objectmyStorage.addItem({ name: "Mostafa" });
console.log(objectmyStorage.getItems()); // [{ name: "Ali" }, { name: "Mostafa" }]
var users = [
    {
        id: 1,
        name: "Ahmed",
        role: "SUPER_ADMIN",
    },
    {
        id: "2",
        name: "Mohammed",
        age: 32,
        role: "USER",
    },
    {
        id: 3,
        name: "Ali",
        age: 36,
        role: "ADMIN",
    },
];
console.log(users);
var summary = { title: "TypeScript Tips", author: "Alice" };
console.log(summary);
var publicUser = {
    id: 1,
    name: "John",
    email: "john@example.com",
};
var todo = {
    id: "1",
    title: "Learn TypeScript",
    description: "Understand utility types",
};
