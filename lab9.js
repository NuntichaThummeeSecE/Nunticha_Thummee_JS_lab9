let student = {
    name: "Mark",
    age: 15,
    grade: 86,
    school: "Riverdale"
}

let greet = () => {
    console.log("Hello " + student.name);
}

student.greet = greet;

student.greet();