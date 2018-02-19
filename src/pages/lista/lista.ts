import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
import { DetalhesPage } from '../detalhes/detalhes';

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
 
  
 
  
  constructor(private listaProvider: ListaProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
    this.carregaFilmes();
   
  }

  carregaFilmes(){   
    var y = [];
    for(var i = 1; i<26; i++)
      this.listaProvider.getFilmes(i).then(x => this.lista= y.concat(this.lista, x.results)) ;  
    }




  backHome(event){
    this.navCtrl.pop();
    }


  itemTapped(event, list){
    this.navCtrl.push(DetalhesPage, {lista: list})
  }
}
