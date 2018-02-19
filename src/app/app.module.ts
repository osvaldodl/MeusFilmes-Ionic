import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http'
import{ SocialSharing} from '@ionic-native/social-sharing'
import { AppPreferences } from '@ionic-native/app-preferences';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  { CreditosPage } from '../pages/creditos/creditos'
import { FavoritosPage } from '../pages/favoritos/favoritos'
import { HistoricoPage } from '../pages/historico/historico'
import { ListaPage } from '../pages/lista/lista'
import { ListaProvider } from '../providers/lista/lista';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { TrailerProvider } from '../providers/trailer/trailer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreditosPage,
    FavoritosPage,
    HistoricoPage,
    ListaPage, 
    DetalhesPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreditosPage,
    FavoritosPage,
    HistoricoPage,
    ListaPage,
    DetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaProvider,
    TrailerProvider,
    SocialSharing,
    AppPreferences
  ]
})
export class AppModule {}
