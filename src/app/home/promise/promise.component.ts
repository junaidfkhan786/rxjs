import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  val: any
  ngOnInit(): void {
    let laptop = new Promise((resolve, reject) => {
      if (this.dell()) {
        resolve('dell is purchased')
      }
      else if (this.hp()) {
        resolve('hp is purchased')
      }
      else {
        reject('not available')
      }
    });

    laptop.then((res) => {
      this.val = res
    }).catch((res) => {
      this.val = res
    })

  }
  promise() {

  }

  dell() {
    return true
  }

  hp() {
    return false
  }
}
