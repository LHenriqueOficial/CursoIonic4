import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-infinity-scrull',
  templateUrl: './component-infinity-scrull.page.html',
  styleUrls: ['./component-infinity-scrull.page.scss'],
})
export class ComponentInfinityScrullPage implements OnInit {
  numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
    25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    
    limit=10;
  constructor() { }

  ngOnInit() {
  }

  popularInfinite(inifiniteScrollEvent :any) {
    console.log('carregar mais 5 itens');
    this.limit += 5;
 inifiniteScrollEvent.target.complete();
  }
}
