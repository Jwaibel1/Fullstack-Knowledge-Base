// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number;
// Number would point at the object instead of the primitive
age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

/* person = {
  isEmployee: true,
}; */

let people: Person[];

//Type inference

/* let course = "React - The Complete Guide"; */

/* course = 12345; */ // The values type is infered based on the type used(string) and is now returning an error because a number is being used

// Union, assign multiple types

let course: string | number = "Hello";

course = 12341;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
// careful with naming a function print because JavaScript has a built in print function already so this may clash with that function and return an error, will leave as is for the sake of the example

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

/* updatedArray[0].split(""); */

// Classes

class Student {
  /* firstName: string;
  lastName: string;
  age: number;
  private courses: string[]; */

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {
    /* this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses; */
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Max", "Cherry", 32, ["Angular"]);
student.enroll("React");
// student.listCourses() => Angular, React

// student.courses => Angular, React

// Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!");
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log("Hello!!!");
  }
}
