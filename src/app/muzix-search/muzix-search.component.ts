import { Component, OnInit } from '@angular/core';
import { MuzixSearchService } from '../service/muzix-search.service';

@Component({
  selector: 'app-muzix-search',
  templateUrl: './muzix-search.component.html',
  styleUrls: ['./muzix-search.component.css']
})
export class MuzixSearchComponent implements OnInit {
//API key - 2989f5ad81bc05a16f320f8b793235dd
  searchAlbum: any;
  results: any = []
  constructor(
    private muzixService: MuzixSearchService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.muzixService.getAlbums(this.searchAlbum).subscribe((res)=>{
      this.results = res.results.albummatches.album;
      // Check the response in the console and decide which elements you will use in your UI
      console.log(res)
    })
  }

}
