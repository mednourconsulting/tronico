import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-vauban',
  template:  `
    <router-outlet></router-outlet>
  `,
})
export class VaubanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
