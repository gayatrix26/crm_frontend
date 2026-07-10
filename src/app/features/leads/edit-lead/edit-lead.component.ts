import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({

  selector:'app-edit-lead',

  templateUrl:'./edit-lead.component.html',

  styleUrls:['./edit-lead.component.css']

})
export class EditLeadComponent {


  @Input()
  leadId!:number;



  @Output()
  leadUpdated = new EventEmitter<void>();



  showForm:boolean=false;



  openForm(){

    this.showForm=true;

  }



  closeForm(){

    this.showForm=false;

  }



  updated(){

    console.log(
      "Lead updated",
      this.leadId
    );


    this.leadUpdated.emit();


    this.closeForm();

  }


}