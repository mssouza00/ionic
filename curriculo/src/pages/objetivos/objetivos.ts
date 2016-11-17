import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosPessoais } from '../../providers/dados-pessoais';


@Component({
  selector: 'page-objetivos',
  templateUrl: 'objetivos.html'
})
export class Objetivos {

  constructor(public navCtrl: NavController,public dadosPessoais: DadosPessoais) {}

  ionViewDidLoad() {
    console.log('Hello Objetivos Page');
  }

}
