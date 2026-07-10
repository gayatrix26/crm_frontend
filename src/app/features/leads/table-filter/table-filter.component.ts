import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {


  @Input()
  title:string = 'Filter';


  @Input()
  options:string[] = [];


  selectedOption:string = '';


  dropdownOpen:boolean = false;


  @Output()
  filterChanged = new EventEmitter<string>();


  toggleDropdown(){

    this.dropdownOpen = !this.dropdownOpen;

  }


  selectFilter(option:string){

    this.selectedOption = option;

    this.filterChanged.emit(option);

    this.dropdownOpen=false;

  }


  clearFilter(){

    this.selectedOption='';

    this.filterChanged.emit('');

    this.dropdownOpen=false;

  }


}