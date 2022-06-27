import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  private baseUrl = "https://www.themuse.com/api/public/companies?page=";


  constructor(private http: HttpClient) { }
  // Check the api site, you can use a lot of things apart from page
  searchJobs(page: any){
    return this.http.get<any>(this.baseUrl+page)
  }


}
