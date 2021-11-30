import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }
   
  ngOnInit(): void {
  } 
  x : any = [];
  onClick(i:number):any{
    var y:any=(Math.random()); 
    this.x[i]=setInterval(()=> Math.round(y),500);
    return this.x;
  }
  add(){
    var sum=0;
    sum=this.x.reduce((a:any,b:any)=>{return a+b;})
    alert("your Score="+sum);
    if(sum>100)
    {
      alert("hurray!! you won");
    }
    else{
      alert("oops!! you lost")
    }
  }
}
