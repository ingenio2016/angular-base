import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artistas:any[] = [];
  constructor( private _http:HttpClient ) {
    console.log("Servicio de Spotify Listo");
  }

  getArtista(termino:string){
    let url:string = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&limit=20`;
    let headers = new HttpHeaders({
      'authorization' : 'Bearer BQD5vIKUgvshf5MyIlwqda6ksSeTT6ocRVBzvC-VqdVsNqjZDHyYaA9rXhTMhHsqWYoR3wlmSlvVy_BDtl8'
    });
    return this._http.get(url, { headers })
                     .map( (resp:any) => {
                       this.artistas = resp.artists.items;
                       return this.artistas;
                     })
  }

}
