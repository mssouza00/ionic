import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DadosPessoais } from '../../providers/dados-pessoais';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

nome;
endereco;
telefone;

  constructor(public navCtrl: NavController,public dadosPessoais: DadosPessoais) {

    this.nome = this.dadosPessoais.getNome();
    this.endereco = this.dadosPessoais.getEndereco();
    this.telefone = this.dadosPessoais.getTelefone();

  }

}
