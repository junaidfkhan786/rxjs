import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  cards = [
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
    {name:"Promises"},
  ]

  goto(name){
console.log(name)
    if(name = 'Promises'){
      this.router.navigate(['/promise'])
    }

  }
}
