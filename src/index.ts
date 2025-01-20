// Question: Create a function that takes literal types "red" | "yellow" | "blue" and returns their hexcode colors

type Color = "red" | "yellow" | "blue";

function getColorCode(color: Color): string {
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

function printValueLength<T extends { length: number }>(value: T): void {
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

class myStorage<T> {
  private items: T[] = [];

  // Add an item to the myStorage
  addItem(item: T): void {
    this.items.push(item);
  }

  // Get all items from the myStorage
  getItems(): T[] {
    return this.items;
  }
}

// Usage examples

// Storing strings
const stringmyStorage = new myStorage<string>();
stringmyStorage.addItem("Hello");
stringmyStorage.addItem("World");
console.log(stringmyStorage.getItems()); // ["Hello", "World"]

// Storing numbers
const numbermyStorage = new myStorage<number>();
numbermyStorage.addItem(1);
numbermyStorage.addItem(2);
console.log(numbermyStorage.getItems()); // [1, 2]

// Storing objects
const objectmyStorage = new myStorage<{ name: string }>();
objectmyStorage.addItem({ name: "Ali" });
objectmyStorage.addItem({ name: "Mostafa" });
console.log(objectmyStorage.getItems()); // [{ name: "Ali" }, { name: "Mostafa" }]

// Given the data, define the interface "User" and use it accordingly.

interface User {
  id: number | string;
  name: string;
  age?: number;
  role: "SUPER_ADMIN" | "USER" | "ADMIN";
}
const users: User[] = [
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

// -----------------------------------------------------------------

// Create a new type "BlogSummary" that only inherit the "title" and "author" properties from the Blog interface.

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
}

type BlogSummary = Pick<Blog, "title" | "author">; // <- update this

const summary: BlogSummary = { title: "TypeScript Tips", author: "Alice" };

console.log(summary);

// -----------------------------------------------------------------

// Create a new type "PublicUser" that execlude the propery "password" from "SystemUser"

interface SystemUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<SystemUser, "password">;

const publicUser: PublicUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

// -----------------------------------------------------------------
// Implement the built it Required utlity type (hint: with mapped types)
// type Todo = {
//   id: string;
//   title: string;
//   description?: string;
// };

// type MyRequired = unknown <- here

// type TodoAllRequired = MyRequired<Todo>;

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type Todo = {
  id: string;
  title: string;
  description?: string;
};

type TodoAllRequired = MyRequired<Todo>;

const todo: TodoAllRequired = {
  id: "1",
  title: "Learn TypeScript",
  description: "Understand utility types",
};
