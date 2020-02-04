import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-component-modal-interno',
  templateUrl: './component-modal-interno.page.html',
  styleUrls: ['./component-modal-interno.page.scss'],
})
export class ComponentModalInternoPage implements OnInit {

  constructor(private navParam : NavParams , private alerCtrl :AlertController ,private modalCtrl : ModalController) { }

 async ngOnInit() {
   let nome = this.navParam.get('nome');
   let idade = this.navParam.get('idade');

  let alerta = await this.alerCtrl.create({
     header: 'bem vindo ',
     message: 'Seja bem vindo '+ nome + ' temos uma serie de beneficios para quem possui ' + idade + ' anos '
   });
   return await alerta.present();
  }

  async closeModal(){
    let parametroderesposta = {nome: 'fernanada ', idade:'22'};
    this.modalCtrl.dismiss(parametroderesposta);
  }

}
