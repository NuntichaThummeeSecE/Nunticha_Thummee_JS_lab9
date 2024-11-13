//task 1 
//create object : student
let student = {
    name: "Mark",
    age: 15,
    grade: 86,
    school: "Riverdale",

    //create greet method
    greet(){
        console.log("Hello " + student.name);
    }
}

//call method
student.greet();

//console.log each property of the student object
console.log("Name: "+student.name);
console.log("Age: "+student.age);
console.log("Grade: "+student.grade);
console.log("School: "+student.school);