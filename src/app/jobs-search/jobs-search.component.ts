import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../service/job-service.service';

@Component({
  selector: 'app-jobs-search',
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.css']
})
export class JobsSearchComponent implements OnInit {

  pageNo: string;
  jobs: any = []

  constructor(private jobSearch: JobServiceService) { }

  ngOnInit(): void {
  }

  onJobSearch(){
    this.jobSearch.searchJobs(this.pageNo).subscribe((res)=>{
      // Check the response in the console and decide which elements you will use in your UI
      console.log(res.results);
      this.jobs = res.results;
    })
  }

}
