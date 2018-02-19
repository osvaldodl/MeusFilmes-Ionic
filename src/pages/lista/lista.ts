import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
import { DetalhesPage } from '../detalhes/detalhes';
import { AppPreferences } from '@ionic-native/app-preferences';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})



export class ListaPage {
  lista= [];
 
  
 
  
  constructor( public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public prefs: AppPreferences) {
    this.platform.ready().then(() => prefs.fetch(null,'lista').then(x =>this.lista = x));
    
   this.platform.ready().then(() => console.log(this.lista));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
    this.ordenaLista();
       
  }

  
  ordenaLista(){
    this.lista.sort(
      function(a,b){
        var nomeA = a.title.toLowerCase();
        var nomeB = b.title.toLowerCase();
        if (nomeA < nomeB)
          return -1;
        if (nomeA > nomeB)
           return 1;
     return 0;
   });
  }




  backHome(event){
    this.navCtrl.pop();
    }


  itemTapped(event, list){
    this.navCtrl.push(DetalhesPage, {lista: list})
  }
}
