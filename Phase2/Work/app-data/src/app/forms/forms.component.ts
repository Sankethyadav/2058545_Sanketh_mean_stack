import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
f1:boolean=false
f2:boolean=true
f3:boolean=false
fname:string=""
fpass:string=""
lname:string=""
employee:Array<Employee>=new Array()
mname:string=""
mnumber:string=""

  constructor() {
  }

  ngOnInit(): void {
  }
changevalue(reference:any,nameref:any){
this.fname=reference.value
this.fpass=nameref.value
  this.f1=true
  this.f2=false
}
fun(ref:any,Ref:any){
  if(ref.value==this.fname && Ref.value==this.fpass){
  this.f1=false
  this.f2=false
  this.f3=true
  }
  else{
    alert("Wrong Username or Password")
  }
  this.lname=ref.value
}
afg(tab:any,tabs:any){
  this.mname=tab.value
  this.mnumber=tabs.value
  var a = this.mnumber
  console.log(a)
  let emp1=new Employee(this.mname,this.mnumber)
  this.employee.push(emp1)
  console.log(this.employee)
 
}
}
