import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.page.html',
  styleUrls: ['./component-list.page.scss'],
})
export class ComponentListPage implements OnInit {

    frutas : string[]=['abacate', 'maça', 'manga', 'pera'];
  constructor() { }

  ngOnInit() {
  }

}
