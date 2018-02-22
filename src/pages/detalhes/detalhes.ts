import { FavoritosPage } from './../favoritos/favoritos';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TrailerProvider } from '../../providers/trailer/trailer';
import { SocialSharing } from  '@ionic-native/social-sharing';
import { ToastController } from 'ionic-angular';

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
  favoritos = [];
  trailer;
  avaliacao = 0;
  corIcone = 'white';
  shouldHeight = document.body.clientHeight + 'px' ;
  parent = '';
 
    
  constructor(private trailerProvider:TrailerProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public socialSharing: SocialSharing,
    public prefs: AppPreferences,
    public platform: Platform, 
    private toasty: ToastController ) {

    this.lista = this.navParams.get('lista');
    this.parent = this.navParams.get('parent');
    this.platform.ready().then(() => this.prefs.fetch(null,'favoritos').then(x => {
        this.favoritos = x || [];
        let achei = false;
        for(let i = 0; i < this.favoritos.length; i++){
            if(this.favoritos[i]['id'] === this.lista['id']){
                achei =true;
            }
        }
        if(achei){
            this.corIcone ='yellow';
        }
        else{
            this.corIcone = 'white';
        }
    })).catch(erro => console.log("Nao foi possivel recuperar dados"));
  }

  avisoToast(mensagem: string) {
    let toast = this.toasty.create({
      message: mensagem,
      duration: 2000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('lista'));
    console.log('ionViewDidLoad DetalhesPage');
    this.getTrailer();
    this.avaliacao = this.lista['vote_average']*10;
  }

  backHome(event){
    this.navCtrl.popToRoot();
  }

  goBack(event){
    
    if(this.parent == 'favoritos'){
          this.navCtrl.push(FavoritosPage);
    }
    else{
        this.navCtrl.pop();      
    }      
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
        this.platform.ready().then(() => this.socialSharing.share('Compartilhar via:','confira no site:', '', "https://www.themoviedb.org/movie/"+this.lista['id'])).catch(erro => {
            console.log("Função não disponível")
            this.avisoToast("Função não disponível para esta plataforma :-(");
        });
    }

    favoritar(event){
        this.platform.ready().then(() => {
            if(this.corIcone == 'white'){
                this.favoritos.push(this.lista);
                this.corIcone = 'yellow';
            }
            else{
                for(let i = 0; i < this.favoritos.length; i++){
                    if(this.favoritos[i]['id'] == this.lista['id']){
                        this.favoritos.splice(i, 1);
                        this.corIcone = 'white';
                        break;
                    }
                }                
            }            
            this.prefs.store(null,'favoritos', this.favoritos);
        }).catch(erro => console.log("Não foi possivel adicionar favorito"));
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
    this.trailerProvider.getTrailer(this.lista['id']).then(x => {
         if( x.results[0] != null){
           this.trailer= x.results[0].key;
           console.log(x.results[0].key);
          }else{
            this.trailer = '';
    }}).catch(erro => {
        console.log("Trailer indisponível");
        this.avisoToast("Trailer indisponível");
    });    
  }

}
