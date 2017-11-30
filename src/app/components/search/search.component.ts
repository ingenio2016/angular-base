import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  termino:string = "";
  constructor(private _spotifyService:SpotifyService) {
  }

  buscarArtista(){
    console.log(this.termino);
    if(this.termino.length == 0){
      return;
    }

    this._spotifyService.getArtista(this.termino).subscribe(resp => {
      console.log(resp);
    });
  }

  ngOnInit() {
  }

}
