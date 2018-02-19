import { Component } from '@angular/core';
import { NavController, MenuController, Platform } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { CreditosPage } from '../creditos/creditos';
import { FavoritosPage } from '../favoritos/favoritos';
import { HistoricoPage } from '../historico/historico';
import { AppPreferences } from '@ionic-native/app-preferences';
import { ListaProvider } from '../../providers/lista/lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista = [];

  constructor(public navCtrl: NavController, public menuCtrl: MenuController,public platform: Platform, 
    public prefs: AppPreferences, private listaProvider: ListaProvider ) {
      this.carregaFilmes();
      this.platform.ready().then(() => prefs.store(null,'lista', this.lista))
  }


  carregaFilmes(){   
    var y = [];
    for(var i = 1; i<26; i++)
      this.listaProvider.getFilmes(i).then(x => this.lista= y.concat(this.lista, x.results)) ;  
    }


  toLista(event){
    this.navCtrl.push(ListaPage, {});
  }

  toCreditos(event){
    this.navCtrl.push(CreditosPage, {})
  }

  toFavoritos(event){
    this.navCtrl.push(FavoritosPage, {})
  }

  toHistorico(event){
    this.navCtrl.push(HistoricoPage, {})
  }

  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
