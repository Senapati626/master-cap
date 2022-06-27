import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MuzixSearchService {
  private baseURL = "https://ws.audioscrobbler.com/2.0/?method=album.search&api_key=2989f5ad81bc05a16f320f8b793235dd&format=json&album="

  constructor(private http:HttpClient) { }

  getAlbums(data:any){
    return this.http.get<any>(this.baseURL+data);
  }
}
