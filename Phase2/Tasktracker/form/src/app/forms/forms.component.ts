import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
uname:string=""
uid:string=""
unum:string=""
uadd:string=""
employee:Array<Employee>=new Array()
  constructor() { }

  ngOnInit(): void {
  }

  fun(ref:any,refs:any,val:any,vals:any){
    this.uname=ref.value
    this.uid=refs.value
    this.unum=val.value
    this.uadd=vals.value
    console.log(this.uid)
    let emp1=new Employee(this.uname,this.uid,this.unum,this.uadd)
    this.employee.push(emp1)
    console.log(this.employee)
  }
}

