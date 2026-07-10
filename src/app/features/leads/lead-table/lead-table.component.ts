import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';


import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Lead } from '../../../models/interfaces/lead.model';


@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.css']
})
export class LeadTableComponent implements AfterViewInit, OnChanges {


  // ==============================
  // INPUT FROM PARENT
  // ==============================

  @Input()
  leads: Lead[] = [];

  @Output()
leadChanged = new EventEmitter<void>();

@Output()
pageChanged = new EventEmitter<any>();

  // ==============================
  // TABLE CONFIG
  // ==============================

  displayedColumns:string[]=[

    'customerName',

    'phoneNo',

    'category',

    'city',

    'leadSource',

    'status',

    'priority',

    'assignedTo',

    'actions'

  ];

@Input()
totalElements:number = 0;

@Output()
leadDeleted = new EventEmitter<number>();


@Input()
pageSize:number = 10;
  dataSource = new MatTableDataSource<Lead>();



  @ViewChild(MatPaginator)
  paginator!:MatPaginator;



  @ViewChild(MatSort)
  sort!:MatSort;



  onPageChange(event:any){

  this.pageChanged.emit(event);

}


  // ==============================
  // RECEIVE DATA FROM PARENT
  // ==============================

 ngOnChanges(changes: SimpleChanges): void {

  if (changes['leads']) {

    this.dataSource = new MatTableDataSource(this.leads);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}



  // ==============================
  // MATERIAL TABLE INIT
  // ==============================

  ngAfterViewInit():void{


    this.dataSource.paginator=this.paginator;


    this.dataSource.sort=this.sort;


  }




  // ==============================
  // ACTIONS
  // ==============================


  viewLead(id:number){

    console.log(
      'View Lead',
      id
    );

  }



 


deleteLead(id: number): void {

  const confirmDelete = confirm(
    'Are you sure you want to delete this lead?'
  );

  if (!confirmDelete) {
    return;
  }

  this.leadDeleted.emit(id);

}




  // ==========================================
  // FILTER OPTIONS
  // ==========================================


  categoryOptions:string[]=[

    'IT',
    'Retail',
    'Education',
    'Healthcare',
    'Finance',
    'Manufacturing'

  ];



  sourceOptions:string[]=[

    'WEBSITE',
    'FACEBOOK',
    'INSTAGRAM',
    'REFERRAL',
    'WALK_IN',
    'NEWSPAPER',
    'TELE_CALL',
    'WHATSAPP'

  ];



  statusOptions:string[]=[

    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'LOST',
    'CLOSED'

  ];



  priorityOptions:string[]=[

    'HOT',
    'WARM',
    'COLD'

  ];



  executiveOptions:string[]=[

    'John',
    'Jane',
    'David',
    'Sarah'

  ];





  // ==========================================
  // FILTER HANDLERS
  // ==========================================


  applyCategoryFilter(value:string){

    console.log(
      "Category Filter:",
      value
    );

  }



  applySourceFilter(value:string){

    console.log(
      "Source Filter:",
      value
    );

  }



  applyStatusFilter(value:string){

    console.log(
      "Status Filter:",
      value
    );

  }



  applyPriorityFilter(value:string){

    console.log(
      "Priority Filter:",
      value
    );

  }



  applyExecutiveFilter(value:string){

    console.log(
      "Executive Filter:",
      value
    );

  }


}