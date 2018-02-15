import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { CreditosPage } from '../creditos/creditos';
import { FavoritosPage } from '../favoritos/favoritos';
import { HistoricoPage } from '../historico/historico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

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
