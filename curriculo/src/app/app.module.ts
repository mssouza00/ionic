import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { EscolaridadePage } from '../pages/escolaridade/escolaridade';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Objetivos } from '../pages/objetivos/objetivos';
import { DadosPessoais } from '../providers/dados-pessoais';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EscolaridadePage,
    HomePage,
    TabsPage,
    Objetivos
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EscolaridadePage,
    HomePage,
    TabsPage,
    Objetivos
  ],
  providers: [
    [DadosPessoais]

  ]
})
export class AppModule {}
