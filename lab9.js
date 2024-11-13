//task 1 
//create object student
let student = {
    name: "Mark",
    age: 15,
    grade: 86,
    school: "Riverdale",

    greet: function () {
        console.log("Hello " + this.name);
    }
}

//call method
student.greet();

//console.log each property of the student object
console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("Grade: " + student.grade);
console.log("School: " + student.school);

//update age 
student.age = 19;
console.log("Update age: " + student.age);

//Task2
//create JSON string 
let book = `{"title" : "Harry Potter and the Sorcerer's Stone", "author" : "J. K. Rowling", "year" : "1998", "genre" : "fantasy"}`;
// parse JSON string into a JS object
let parseBook = JSON.parse(book);
console.log(parseBook);

//convert book into JSON string 
let convertBook = JSON.stringify(parseBook);
console.log(convertBook);

//Task3
//create array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
//combine array 1 and 2
const combinedArray = [...array1, ...array2];

console.log(combinedArray);

//create object person1
let person1 = {
    Firstname: "Harry",
    LastName: "Potter",
    Age: 12
}
//create object person2 with update age
let person2 = {
    ...person1,
    Age: 15
}

console.log(person1);
console.log(person2);

//Task4
//create object calculator with methods
let calculator = {
    //add method
    add: function(a,b){
        return a + b;
    },
    //subtract method
    subtract: function(a,b){
        return a - b;
    },
    //multiply method
    multiply: function(a,b){
        return a*b;
    },
    //divide method
    divide: function(a,b){
        return a/b;
    }
}

//display the result
let numbers = [100,10];
console.log(calculator.add(...numbers));
console.log(calculator.subtract(...numbers));
console.log(calculator.multiply(...numbers));
console.log(calculator.divide(...numbers));