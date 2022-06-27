import { Component, OnInit } from '@angular/core';
import { NewzSearchService } from '../service/newz-search.service';

@Component({
  selector: 'app-newz-search',
  templateUrl: './newz-search.component.html',
  styleUrls: ['./newz-search.component.css']
})
export class NewzSearchComponent implements OnInit {
  //API KEY - 521e7d7939b740c487db029eaabd017e - this one is mine
  searchTerm: any;
  results: any = [];
  constructor(private newsService: NewzSearchService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.newsService.getNews(this.searchTerm).subscribe((res:any)=>{
      // Check the response in the console and decide which elements you will use in your UI
      console.log(res);
      this.results = res.articles;
    })
  }
}
