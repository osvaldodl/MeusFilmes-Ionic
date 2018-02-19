import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrailerProvider } from '../../providers/trailer/trailer';
import {SocialSharing} from  '@ionic-native/social-sharing'
/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  lista = [];
  trailer;
  avaliacao = 0;
  corIcone = 'white';
  shouldHeight = document.body.clientHeight + 'px' ;
 
    
  constructor(private trailerProvider:TrailerProvider,public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
    this.lista = this.navParams.get('lista');
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('lista'));
    console.log('ionViewDidLoad DetalhesPage');
    this.getTrailer();
    this.avaliacao = this.lista['vote_average']*10;
  }

  backHome(event){
    this.navCtrl.pop();
    }

    getIdioma(idioma): String{
    if(idioma === "en")
            return "Inglês";
        else if(idioma === "pt")
            return "Português";
        else if (idioma === "es")
            return "Espanhol";
        else if (idioma === "fr")
            return "Francês";
    }

    share(){
        // todo
    }

    favoritar(){
        //todo
        this.trocaCorIcone();
        this.socialSharing.share('Compartilhar via:','confira no site:', '', "https://www.themoviedb.org/movie/"+this.lista['id']);
    }

    trocaCorIcone(){
        if(this.corIcone == 'white'){
            this.corIcone ='yellow';
        }else{
            this.corIcone = 'white';
        }

    }
  getGeneroPorId(id) {
      switch (id) {
          case 28:
              return "Ação";
          case 12:
              return "Aventura";
          case 16:
              return "Animação";
          case 35:
              return "Comédia";
          case 80:
              return "Crime";
          case 99:
              return "Documentário";
          case 18:
              return "Drama";
          case 10751:
              return "Família";
          case 14:
              return "Fantasia";
          case 36:
              return "História";
          case 27:
              return "Terror";
          case 10402:
              return "Música";
          case 9648:
              return "Mistério";
          case 10749:
              return "Romance";
          case 878:
              return "Ficção científica";
          case 10770:
              return "Cinema TV";
          case 53:
              return "Thriller";
          case 10752:
              return "Guerra";
          case 37:
              return "Faroeste";
          default:
              return "";
      }
  }

  dataConvertida(data): String{
     var dia; var mes; var ano;
    dia = data.substring(8, 10);
    mes = data.substring(5, 7);
    ano = data.substring(0, 4);
    return dia + "/" + mes + "/" + ano;
}

  getTrailer(){
   
    this.trailerProvider.getTrailer(this.lista['id']).then(x =>
       {
         if( x.results[0] != null){
           this.trailer= x.results[0].key;
           console.log(x.results[0].key);
          }else{
            this.trailer = '';
          }});
   
    
  }

  
}