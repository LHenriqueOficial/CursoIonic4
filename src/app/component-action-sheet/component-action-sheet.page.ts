import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-component-action-sheet',
  templateUrl: './component-action-sheet.page.html',
  styleUrls: ['./component-action-sheet.page.scss'],
})
export class ComponentActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }
  async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: "Albuns",
      buttons:[{
        text:'Excluir',
        role:'desctrutive',
        icon:'trash',
        handler: ()=>{
          alert('vermelho')
        }
      },
      {
        text:'Compartilhar',
        role:'desctrutive',
        icon:'share',
        handler: ()=>{
          alert('compartilhar')
        }
      },{
        text:'Assistir',
        // role:'desctrutive',
        icon:'arrow-dropright-circle',
        handler: ()=>{
          alert('Assistir')
        }
      },
      {
        text:'Cancelar',
        role:'cancel',
        icon:'close',
        handler: ()=>{
          console.log('cancelar')
        }
      },
    ]

    });

    await actionSheet.present();
    
  }

}
