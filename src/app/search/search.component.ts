import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/app/service/book.search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: any;
  results: any = []
  constructor(private searchService: BookSearchService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.searchService.search(this.searchTerm).subscribe((res:any)=>{
      this.results = res.docs;
      console.log(res);
    })
  }
}
