import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DadosPessoais provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DadosPessoais {


    linguagem = "java , SQL, Ruby. "
    telefone = 11982060757
    nome = 'Matheus S Souza'
    endereco ='rua ariosto cesar 102'
    resumo = 'Estudando atualmente em busca de novas oportunidades para desenvolver e melhorar meu conhecimento visando um crescimento pessoal e profissional.'
    empresa ='SKY Brasil'
    cargo = 'Backoffice'
    descCargo = 'Departamentos que mantêm muito pouco contato com os cliente, mediador de negociações minimizando o impacto financeiro para empresa corrigindo problemas  dos clientes.'
    escolaridade = 'Superior cursando '
    faculdade = 'Senac'
    curso = "TADS"


  constructor(public http: Http) {
    
  }
  getConhecimentos(){

    return this.linguagem;

  }

  getTelefone(){

    return this.telefone;

  }
  getEscolaridade(){

    return this.escolaridade;

  }
  getFaculdade(){

    return this.faculdade;
  }
  getCurso(){

    return this.curso;

  }
  getEmpresa(){

    return this.empresa;

  }
  getCargo(){

    return this.cargo;

  }
  getDescCargo(){

    return this.descCargo;

  }
  getNome(){

    return this.nome;

  }
  getEndereco(){

return this.endereco;
  }
  getResumo(){
    return this.resumo;

  }
}
