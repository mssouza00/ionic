import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DadosPessoais } from '../../providers/dados-pessoais';
@Component({
  selector: 'page-escolaridade',
  templateUrl: 'escolaridade.html'
})
export class EscolaridadePage {
  curso;
  escolaridade;
  faculdade;
  constructor(public navCtrl: NavController,public dadosPessoais: DadosPessoais){

    this.curso = this.dadosPessoais.getCurso();
    this.escolaridade = this.dadosPessoais.getEscolaridade();
    this.faculdade = this.dadosPessoais.getFaculdade();
  }

}
