import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-check-box',
  templateUrl: './component-check-box.page.html',
  styleUrls: ['./component-check-box.page.scss'],
})
export class ComponentCheckBoxPage implements OnInit {

    meses: any[]=[
      {nomeDoMes:'janeiro',valor:1,marcado:false},
      {nomeDoMes:'fevereiro', valor:2 , marcado:true},
      {nomeDoMes:'marco', valor:3, marcado:true},
      {nomeDoMes:'abriu', valor:4, marcado:false},
      {nomeDoMes:'maio', valor:5, marcado:true},

      
    ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }
  exibirMeses(){
    console.table(this.meses);
  }

}
