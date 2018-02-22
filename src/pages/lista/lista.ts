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
  historico = [];
  
  constructor( public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public prefs: AppPreferences) {
    this.platform.ready().then(() => prefs.fetch(null,'lista').then(x => {
      this.lista = x || [];
    })).catch(erro => console.log("Nao foi possivel recuperar dados"));
    this.platform.ready().then(() => prefs.fetch(null,'historico').then(x => {
      this.historico = x || [];
    })).catch(erro => console.log("Nao foi possivel recuperar dados"));  
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
    this.navCtrl.popToRoot();
  }

  itemTapped(event, list){
    this.platform.ready().then(() => {
      this.historico.unshift(list);
      for(let i = 1; i < this.historico.length; i++){
        if(this.historico[i]['id'] == list['id']){
            this.historico.splice(i, 1);
            break;
        }
      }  
      if(this.historico.length > 100){
        this.historico.pop;
      }
      this.prefs.store(null,'historico', this.historico);
      let rotulo = 'lista';
      this.navCtrl.push(DetalhesPage, {lista: list, parent: rotulo});
    }).catch(erro => console.log("Nao foi possivel gravar"));    
  }
}
