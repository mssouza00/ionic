import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DadosPessoais } from '../../providers/dados-pessoais';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nome;
  resumo;

  constructor(public navCtrl: NavController,public dadosPessoais: DadosPessoais) {
    this.nome = this.dadosPessoais.getNome();
    this.resumo = this.dadosPessoais.getResumo();

  }

}
