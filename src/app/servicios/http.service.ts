import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url : string = 'https://api.github.com/users/nmiguenz';
  private url2 : string = 'https://restcountries.com/v3.1/subregion/europe';

  constructor(public httpClient: HttpClient) { }

  getDatosGit(){
    return this.httpClient.get(this.url);
  }

  getArrayPaises(){
    return this.httpClient.get(this.url2);
  }
}
