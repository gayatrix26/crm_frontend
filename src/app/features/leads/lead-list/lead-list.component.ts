import { Component, OnInit } from '@angular/core';

import { LeadService } from '../../../core/services/lead.service';
import { Lead } from '../../../models/interfaces/lead.model';


@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {


  leads: Lead[] = [];


  pageNumber:number = 0;

  pageSize:number = 10;

totalElements:number = 0;

  constructor(
    private leadService:LeadService
  ) {}



  ngOnInit():void{

    this.loadLeads();

  }




  loadLeads(){

  this.leadService
    .getAllLeadsPage(
      this.pageNumber,
      this.pageSize
    )
    .subscribe({

      next:(response)=>{


        console.log(response);


        this.leads = response.content;


        this.totalElements = response.totalElements;


      },

      error:(err)=>{

        console.error(err);

      }

    });

}


searchKeyword = '';

searchLeads(): void {

  this.pageNumber = 0;

  if (!this.searchKeyword.trim()) {

    this.loadLeads();

    return;

  }

  this.leadService
      .searchLeadsPage(
          this.searchKeyword,
          this.pageNumber,
          this.pageSize
      )
      .subscribe({

        next: (response) => {

          this.leads = response.content;

          this.totalElements = response.totalElements;

        },

        error: (err) => {

          console.error(err);

        }

      });

}



deleteLead(id: number): void {

  this.leadService.deleteLead(id).subscribe({

    next: () => {

      alert('Lead deleted successfully.');

      this.loadLeads();

    },

    error: (err) => {

  console.error(err);

  console.log("Status:", err.status);
  console.log("Error:", err.error);

  alert("Failed to delete lead.");

}

  });

}

changePage(event:any){

  this.pageNumber = event.pageIndex;

  this.pageSize = event.pageSize;

  if(this.searchKeyword.trim()){

    this.searchLeads();

  }else{

    this.loadLeads();

  }

}

}