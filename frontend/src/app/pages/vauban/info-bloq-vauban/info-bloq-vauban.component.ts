import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-info-bloq-vauban',
  templateUrl: './info-bloq-vauban.component.html',
  styleUrls: ['./info-bloq-vauban.component.scss'],
})
export class InfoBloqVaubanComponent implements OnInit {

  atelier: string = 'vauban';
  constructor() { }

  ngOnInit() {
    console.log(this.atelier);
  }

}
