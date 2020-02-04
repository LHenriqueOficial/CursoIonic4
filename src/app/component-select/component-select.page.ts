import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }
  async  showToast(){
    let toast = await this.toastCtrl.create({
      message:"Enviado via toast",
      duration: 2000
    });

    toast.present();
  }

  async  showToastPosition( variavel:string){
    let toast = await this.toastCtrl.create({
      message:"Enviado via toast",
      duration: 2000,
      position: variavel
    });
    
    toast.present();
  }

  async showToastButton(){
    let toast = await this.toastCtrl.create({
      message:"Enviado via toast",
     position: 'middle',
     showCloseButton: true,
     closeButtonText: 'fechar',
     translucent:true
     
    });

    toast.present();
  }

}
