import { AppPreferences } from '@ionic-native/app-preferences';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  lista = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public prefs: AppPreferences) {
    this.platform.ready().then(() => prefs.fetch(null,'historico').then(x => this.lista = x)).catch(erro => console.log("Nao foi possivel recuperar dados"));
    this.platform.ready().then(() => console.log(this.lista));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

  backHome(event){
    this.navCtrl.pop();
  }

  itemTapped(event, list){
    this.navCtrl.push(DetalhesPage, {lista: list})
  }

}