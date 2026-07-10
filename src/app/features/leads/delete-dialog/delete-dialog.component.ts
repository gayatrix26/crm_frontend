import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';



@Component({

  selector:'app-delete-dialog',

  templateUrl:'./delete-dialog.component.html',

  styleUrls:['./delete-dialog.component.css']

})


export class DeleteDialogComponent {



  @Input()

  leadName:string='';



  @Input()

  leadId!:number;



  @Input()

  visible:boolean=false;




  @Output()

  deleteConfirmed = new EventEmitter<number>();



  @Output()

  cancelled = new EventEmitter<void>();






  confirmDelete(){


    this.deleteConfirmed.emit(
      this.leadId
    );


  }






  cancel(){


    this.cancelled.emit();


  }




}