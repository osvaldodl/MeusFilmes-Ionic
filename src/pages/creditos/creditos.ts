import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreditosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html',
})
export class CreditosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  backHome(event){
    this.navCtrl.popToRoot();
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditosPage');
  }

}
