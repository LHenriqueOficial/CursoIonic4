import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresher',
  templateUrl: './component-refresher.page.html',
  styleUrls: ['./component-refresher.page.scss'],
})
export class ComponentRefresherPage implements OnInit {
  message: string ='Puxe para atualizar';
  constructor() { }

  ngOnInit() {
  }
async atualizandoMensagem(event: any){
  setTimeout(()=>{
    this.message ='parabens voce esta usando refresher';
    event.target.complete();

  }, 2000);
}
}
