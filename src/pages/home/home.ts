import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
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

  lista = []
  constructor(public navCtrl: NavController,
    public platform:Platform, public prefs: AppPreferences, private listaProvider: ListaProvider) {
     /* this.prefs.fetch(null,'lista').then(x => {
        this.lista = x || [];
        console.log(x);
        if(this.lista.length == 0){
          this.carregaFilmes();
        }
      else{
        console.log("Nao e necessario baixar os dados");
      }
      })).catch(erro => console.log("Nao foi possivel recuperar dados"));    */
      this.platform.ready().then(() => this.carregaFilmes());
  }
  
  carregaFilmes(){   
    var y = [];
    for(var i = 1; i<26; i++){
      this.listaProvider.getFilmes(i).then(x => this.lista= y.concat(this.lista, x.results)).then(() => this.prefs.store(null,'lista', this.lista));
    }
    console.log("Dados baixados");
  }  

  toLista(event){
    this.navCtrl.push(ListaPage, {});
  }

  toCreditos(event){
    this.navCtrl.push(CreditosPage, {})
    this.platform.ready().then(() => this.prefs.fetch(null,'historico').then(x => console.log(x)));
  }

  toFavoritos(event){
    this.navCtrl.push(FavoritosPage, {})
  }

  toHistorico(event){
    this.navCtrl.push(HistoricoPage, {})
  }

}
