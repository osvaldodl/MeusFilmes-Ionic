import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TrailerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrailerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TrailerProvider Provider');
  }
  getTrailer(id): Promise<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=bad51705c7756f9ffdc7d3dc37b7aad2&language=pt-BR").toPromise();
  }

}
