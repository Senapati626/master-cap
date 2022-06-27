import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewzSearchService {
  private baseUrlA = "https://newsapi.org/v2/everything?q="
  private baseUrlB = "&from=2022-06-27&sortBy=popularity&apiKey=521e7d7939b740c487db029eaabd017e"

  constructor(private http:HttpClient) { }

  getNews(data:any){
    return this.http.get<any>(this.baseUrlA+data+this.baseUrlB)
  }
}
