import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-test',
  template: `<router-outlet></router-outlet>`,
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
