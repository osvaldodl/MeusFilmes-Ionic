import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ListaProvider Provider');
  }


  getFilmes(num): Promise<any>{
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=bad51705c7756f9ffdc7d3dc37b7aad2&sort_by=popularity.desc&language=pt-BR&page='+num).toPromise();
  }

}
