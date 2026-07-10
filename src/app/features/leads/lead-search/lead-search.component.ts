import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';


@Component({

  selector:'app-lead-search',

  templateUrl:'./lead-search.component.html',

  styleUrls:['./lead-search.component.css']

})


export class LeadSearchComponent {


  searchText:string='';



  @Output()

  searchChanged = new EventEmitter<string>();



  onSearch(){


    this.searchChanged.emit(
      this.searchText
    );


  }



  clearSearch(){


    this.searchText='';


    this.searchChanged.emit('');

  }


}