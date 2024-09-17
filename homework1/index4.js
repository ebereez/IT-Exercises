/*Shopping List Application

Add Items to Shopping List: Create a shopping list array and use push() to add "milk", "bread", and "eggs" to it.

Remove Last Item: Use pop() to remove the last item from the shopping list.

Add Item to Beginning: Use unshift() to add "coffee" to the beginning of the shopping list.

Remove First Item: Use shift() to remove the first item from the shopping list.

Find Index of an Item: Use indexOf() to find the index of "eggs" in the shopping list.

Check if Item Exists: Use includes() to check if "butter" is in the shopping list.

Copy Shopping List: Use slice() to create a new copy of the shopping list without modifying the original.

Update Item in List: Use splice() to update "milk" to "almond milk" in the shopping list.

Sort the List: Use sort() to sort the shopping list alphabetically.

Reverse the List: Use reverse() to reverse the order of the shopping list.
*/

const ShoppingList = ["butter", "sugar", "cereal"];
ShoppingList.push("milk", "bread", "eggs");
console.log(ShoppingList);
ShoppingList.pop();
console.log(ShoppingList);
ShoppingList.unshift("coffee");
console.log(ShoppingList);
ShoppingList.shift();
console.log(ShoppingList);
console.log(ShoppingList.indexOf("eggs"));//eggs are no longer in my array
console.log(ShoppingList.includes("butter"));
const copy = ShoppingList.slice();
console.log(copy);
ShoppingList.splice(3, 1, "almond milk");
console.log(ShoppingList);
console.log(ShoppingList.sort());
console.log(ShoppingList.reverse());

/*Classroom Management

Add New Student: Create an array of student names and use push() to add a new student.

Remove Last Student: Use pop() to remove the last student who left the class.

Add Multiple Students at Beginning: Use unshift() to add two new students at the beginning of the list.

Remove First Student: Use shift() to remove the first student from the list.

Find a Student’s Position: Use indexOf() to find the position of a student named "John".

Check if Student is Present: Use includes() to check if "Sarah" is enrolled in the class.

Copy Top 3 Students: Use slice() to copy the top 3 students from the list for a special assignment.

Update a Student's Name: Use splice() to correct a student’s misspelled name.

Sort Students Alphabetically: Use sort() to sort the students’ names in alphabetical order.

Shuffle Students: Use sort() and Math.random() to randomly shuffle the list of students.
*/

const NewStudent = ["Ebere", "Margaret", "Daniel", "Michael", "Chinwoke"];
NewStudent.pop();
console.log(NewStudent);
NewStudent.unshift("Ugo", "Uju");
console.log(NewStudent);
NewStudent.shift();
console.log(NewStudent);
console.log(NewStudent.indexOf("John"));//doesn't exist
console.log(NewStudent.includes("Sarah"));
console.log(NewStudent.slice(0,3));
NewStudent.splice(4, 1, "Michelle");
console.log(NewStudent);
console.log(NewStudent.sort());
console.log(NewStudent.sort(() => Math.random() - 0.5));


/*E-commerce Website Product Management

Add New Product: Create an array of product names and use push() to add a new product.

Remove Last Product: Use pop() to remove the last product that went out of stock.

Insert Product at Beginning: Use unshift() to add a newly featured product at the beginning of the list.

Remove First Product: Use shift() to remove the first product that is no longer available.

Find Product by Name: Use indexOf() to find the index of a product named "laptop".

Check if Product Exists: Use includes() to check if "tablet" is listed on the website.

Copy Part of the Product List: Use slice() to create a new array with the first 5 products.

Replace a Product: Use splice() to replace a product that is discontinued with a new one.

Sort Products by Name: Use sort() to arrange the products in alphabetical order.

Filter Expensive Products: Use filter() to return a list of products that cost more than $500.
*/

const NewProduct = ["conditioner", "shampoo", "cream", "gel", "serurm", "lotion", "perfume", "bodyscrub"];

NewProduct.pop();
console.log(NewProduct);
NewProduct.unshift("deodorant");
console.log(NewProduct);
NewProduct.shift();
console.log(NewProduct);
console.log(NewProduct.indexOf("laptop"));
console.log(NewProduct.includes("tablet"));
console.log(NewProduct.slice(0, 5));
NewProduct.splice(2, 1, "oil");
console.log(NewProduct);
console.log(NewProduct.sort());

const NewProductPrice = [
{name: "conditioner", price: 1000},
{name: "shampoo", price: 700},
{name: "cream", price: 350},
{name: "serurm", price: 750},
{name: "gel", price: 300},
{name: "lotion" ,price: 400},
{name: "perfume", price: 900},
{name: "bodyscrub", price: 1200}
];



/*
let expensiveproduct = NewProductPrice.filter((product) => product.price > 500);
console.log(expensiveproduct);
*/




function expensiveproduct(product) {
    if(product.price > 500){
        return true;
    }else{
        return false;
    }
}

const expensive = NewProductPrice.filter(expensiveproduct);
console.log(expensive);
