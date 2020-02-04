import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {

 
  constructor(private navCtrl :NavController) { }

  ngOnInit() {
  }
  abrirPagina(nomeDaPagina : string ){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
