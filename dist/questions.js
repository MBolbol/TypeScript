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
// -----------------------------------------------------------------
// Write a function printValueLength that accepts a parameter of type string | string[], string | number[], ...etc. Use type narrowing to safely log the length of the value. (Don't use any)
function printValueLength(value) { }
printValueLength("hello"); // "String length: 5"
printValueLength(["a", "b", "c"]); // "Array length: 3"
printValueLength([1, 2]); // "Array length: 2"
printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]); // "Array length: 3"
// -----------------------------------------------------------------
// Write a generic class Storage<T> that holds an array of items of type T. Add methods to add items and get all items.
class Storage {
}
const stringStorage = new Storage();
stringStorage.addItem("hello");
console.log(stringStorage.getItems()); // ["hello"]
export const users = [
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
const summary = { title: "TypeScript Tips", author: "Alice" };
const publicUser = {
    id: 1,
    name: "John",
    email: "john@example.com",
};
// type MyRequired = unknown <- here
// type TodoAllRequired = MyRequired<Todo>;
