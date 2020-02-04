import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl :LoadingController) { }

  ngOnInit() {
  }

  async exibeLoadingDefault(){
    let loading = await this.loadingCtrl.create({
      message : 'Carrengando',
      duration: 3000
    });
    return await loading.present();

  }

   async showLoadingCostumaizer(){
    let loading = await this.loadingCtrl.create({
      message: "carregando 2",
      duration: 3000,
      spinner: 'dots',
      mode:"ios"

    });
    return await loading.present();
   }
   async showLoadingCostumaizerName(){
     let loading = await this.loadingCtrl.create({
      spinner: 'lines-small',
      message: 'processando',
      duration:2000,
      translucent: true,
      mode: 'ios'
     });

     return await loading.present();
   }

   async showLoadingConsumindoApi(){
    let loading = await this.loadingCtrl.create({
     spinner: 'lines-small',
     message: 'Simulando requisção do servidor ',
    //  duration:2000,
     translucent: true,
     mode: 'ios',
    });

    // simulando uma api

    setTimeout(()=>{
      loading.dismiss();
    }, 9000);
    return await loading.present();

  }

}
