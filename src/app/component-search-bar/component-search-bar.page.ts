import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-search-bar',
  templateUrl: './component-search-bar.page.html',
  styleUrls: ['./component-search-bar.page.scss'],
})
export class ComponentSearchBarPage implements OnInit {

  nome: string ='';
  pessoas: any;
  pessoasFiltradas : any;

  constructor() {
    this.pessoas=[
      {id:1, idade:13 ,nome: 'paulo'},
      {id:2, idade:15 ,nome: 'lauro'},
      {id:3, idade:137 ,nome: 'João'},
      {id:4, idade:10 ,nome: 'Maria'},
      {id:5, idade:18 ,nome: 'Eduarda'},
    ];

    this.pessoasFiltradas =this.pessoas;
   }

  ngOnInit() {
  }

   filtarItens(){
    this.pessoasFiltradas =this.filtrarPessoas(this.nome);
  }
  filtrarPessoas(nome){
    this.pessoasFiltradas =this.pessoas;
    
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
