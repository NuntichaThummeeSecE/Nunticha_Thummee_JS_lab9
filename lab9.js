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
