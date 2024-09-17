/*
Exercise 1: Car Class
Create a Car class that represents a car. It should have the following properties and methods:

Properties:
make: The car's manufacturer (e.g., "Toyota").
model: The car's model (e.g., "Camry").
year: The year the car was made (e.g., 2020).
color: The color of the car (e.g., "Red").
Methods:
start(): Logs "The car is starting".
drive(): Logs "The car is driving".
Objective: Create an instance of the Car class, set its properties, and call the methods.
*/


class Car{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this. color = color;
    }

    start(){
        console.log("The car is starting");
    }

    drive(){
        console.log("The car is driving");
    }
}

const Car1 = new Car("Toyota", "Camry", "2020", "Red");
Car1.start();
Car1.drive();

/*
Exercise 2: Person Class
Create a Person class that represents a person. It should have the following properties and methods:

Properties:
firstName: The person's first name.
lastName: The person's last name.
age: The person's age.
Methods:
introduce(): Logs a message introducing the person (e.g., "Hello, my name is John Doe and I am 30 years old").
Objective: Create two instances of the Person class and have each person introduce themselves.

*/

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    }
}

const Racheal = new Person("Racheal", "White", 24);
const Alex = new Person("Alex", "Martin", 17);

Racheal.introduce();
Alex.introduce();

/*
Exercise  3: Book Class
Create a Book class that represents a book. It should have the following properties and methods:

Properties:
title: The title of the book.
author: The author of the book.
pages: The number of pages.
Methods:
read(): Logs a message that says, "You are reading [title] by [author]".
Objective: Create an instance of the Book class, assign values, and call the read() method.

*/

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        console.log(`You are reading [${this.title}] by [${this.author}].`);
    }
}

const YHAB = new Book("You have a Brain", "Ben Carson and Cecil Murphy", 240);
YHAB.read();

/*
Exercise 4: Rectangle Class
Create a Rectangle class that represents a rectangle. It should have the following properties and methods:

Properties:
width: The width of the rectangle.
height: The height of the rectangle.
Methods:
getArea(): Returns the area of the rectangle (width × height).
getPerimeter(): Returns the perimeter of the rectangle (2 × (width + height)).
Objective: Create an instance of the Rectangle class, calculate the area and perimeter of the rectangle, and log the results.
*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

    getPerimeter(){
       return  2 * (this.width + this.height);
    }
}

const Rectangle1 = new Rectangle(50, 24);
console.log(`The area is ${Rectangle1.getArea()}`);
console.log(`The perimeter is ${Rectangle1.getPerimeter()}`);


class Bookclass{
    constructor(name){
        this.name = name;
    }
}

const Book1 = new Bookclass("You have a Brain");
const Book2 = new Bookclass("Oliver Twist");
const Book3 = new Bookclass("The Ugly Duckling");
const Book4 = new Bookclass("The Book of Lost Names");
const Book5 = new Bookclass("The name of the people");

class Library{
    constructor(){
        this.bookarray= [];
    }

   add(books){
        this.bookarray.push(books);
   }
} 

const cart1  = new Library();

console.log(cart1.add("New Book"));
console.log(cart1.add('THIS IS ANOTHER BOOK'));

console.log(cart1.keys().toArray());