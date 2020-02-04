import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }
  async abrirAlertSimples(){
    let alertSimples = await this.alertCtrl.create({
      header:"Alert Simples",
      subHeader: 'Sub Header',
      message:'Essa é a mensagem do alert simples',
      buttons:['ok']
    });
    await alertSimples.present();

  }

  async abrirAlertMultBotoes(){
    let alertMultBotoes = await this.alertCtrl.create({
      header:'Alert Multiple',
      // subHeader:' Sub Header',
      message:' Mensagens de alert Multiple Buttons',
      buttons:[
        'ok', 'cancelar', 'exit', 'Avançar'
      ]
    });
    await alertMultBotoes.present();
  }
  
  async abrirAlertConfirmacao(){
    let alertConfirma = await this.alertCtrl.create({
      header:'Alert Confmação',
      message:'Deseja cancelar o pedido <b>XPTO</b>?',
      cssClass: 'danger',
      buttons:[
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass:'danger',
          handler: ()=>{
            console.log('Pedido cancelado: XPTO')
          }
        },
        {
          text: 'Pagar',
          handler: ()=>{
            console.log('Pago com sucesso!!!')
          }
        }
      ]
    });
    await alertConfirma.present();
  }

  async abrirPrompt(){
    let prompt = await this.alertCtrl.create({
     header:'Aceeso Restrito',
     message: 'Entre com seus dados ou abra uma conta',

     inputs:[
       {
         name:'login',
         type:'email',
         placeholder:'Informe seu email'
       },
       {
         name:'senha',
         type:'password',
         placeholder:'informe sua senha'
       }],
       buttons:[
         {
          text:'Novo',
          cssClass:'danger',
          role:'cancel',
          handler: ()=>{
            console.log('Abrir tela d cadastro de novos usuarios')
          }
         },
        {
          text:'Entrar',
          handler: (data)=>{
            console.log('Seja bem vindo fulano', data)
          }
        },
        {
          text:'Concelar',
          role:'Cancel',
          handler: ()=>{
            console.log('Retornar ao menu')
          }
        }
      ]
       

    });
    await prompt.present();
  }

  async abrirRadio(){
    let alertRadio = await this.alertCtrl.create({
      header: 'radio',

      inputs: [
        {
          name:'radio1',
          type:'radio',
          label:'Radio1',
          value:'value1',
          checked: true
        },
        {
          name:'radio2',
          type:'radio',
          label:'Radio2',
          value:'value2'
        },
        {
          name:'radio3',
          type:'radio',
          label:'Radio3',
          value:'value3'
        },
        {
          name:'radio14',
          type:'radio',
          label:'Radio4',
          value:'value4'
        },
        {
          name:'radio5',
          type:'radio',
          label:'Radio5',
          value:'value5'
        },
        {
          name:'radio6',
          type:'radio',
          label:'Radio6',
          value:'value6'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'secondary',
          handler: ()=>{
            console.log('confirm cancel')
          }
        },
        {
          text:'Ok',
          handler: ()=>{
            console.log('Confirm ok')
          }

        }
      ]
    });
    await alertRadio.present();
  }
  
  async abrirChekBox(){
    let abrirCheckBox  = await this.alertCtrl.create({
      header: 'CheckBox',

      inputs: [
        {
          name:'checkbox1',
          type:'checkbox',
          label:'checkbox1',
          value:'value1',
          checked: true
        },
        {
          name:'checkbox2',
          type:'checkbox',
          label:'checkbox2',
          value:'value1'
        },
        {
          name:'checkbox3',
          type:'checkbox',
          label:'checkbox3',
          value:'value3'
        },
        {
          name:'checkbox4',
          type:'checkbox',
          label:'checkbox4',
          value:'10'
        },
      ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          cssClass:'secondary',
          handler: ()=>{
            console.log('confirm cancel')
          }
        },
        {
          text:'Ok',
          handler: (data)=>{
            console.log('Confirm ok', data)
          }

        }
      ]
    });
    await abrirCheckBox.present();
  }
}
