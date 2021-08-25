class Employee{
    constructor(name,age,gender,date){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.date=date;
    }
} 

let readline=require("readline-sync")
let emp=new Employee()
let name= readline.question("Enter your name");
let age=readline.questionInt("Enter your age")
let gender= readline.question("Enter your gender");
emp.name=name;
emp.age=age;
emp.gender=gender
emp.date=new Date()
console.log(name)
debugger;
console.log(age)
debugger;
console.log(gender)

let fs=require("fs")
let employee=JSON.parse(fs.readFileSync("employee.json").toString());
employee.push(emp)
let empstring=JSON.stringify(employee)
fs.writeFileSync("employee.json",empstring);

console.log(employee)
