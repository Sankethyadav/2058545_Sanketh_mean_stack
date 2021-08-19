import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
str:Array<any>=[]
correctAnswer:number=0
total:number=0
  constructor(public ser:TestService) { }

  ngOnInit(): void {
    let a =[]
    this.ser.checkuser().subscribe(result=>{
    console.log(result.length)
    this.total = result.length
    for(let i = 0;i<result.length;i++){
      this.str.push(result[i])
    }
     
 })
  }
  onclick(){
     this.correctAnswer= this.correctAnswer+1
  
    alert("correct answer")
  }
  onclicks(){
   
alert("wrong answer")
  }

  submit(){
    alert(this.correctAnswer+" out of "+ this.total+" are correct")
    if(this.correctAnswer>=3){
      alert("You have pass the exam")
    }
    else{
      alert("You have fail the exam")
    }
  }
  }
