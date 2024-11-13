//task 1 
//create class : student
class student {
    constructor(name, age, grade, school){
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.school = school;
    }

    //create greet method
    greet(){
        console.log("Hello " + this.name);
    }
}

let student1 = new student ("Mark", 15, 86, "Riverdale");

//call method
student1.greet();

//console.log each property of the student object
console.log("Name: "+student1.name);
console.log("Age: "+student1.age);
console.log("Grade: "+student1.grade);
console.log("School: "+student1.school);

//update age 
student1.age = 19;
console.log("Update age: "+student1.age);

//Task2
//create JSON string 
let book = `{"title" : "Harry Potter and the Sorcerer's Stone", "author" : "J. K. Rowling", "year" : "1998", "genre" : "fantasy"}`;
// parse JSON string into a JS object
let parseBook = JSON.parse(book);
console.log(parseBook);

//convert book into JSON string 
let convertBook = JSON.stringify(parseBook);
console.log(convertBook);