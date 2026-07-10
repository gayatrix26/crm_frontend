import {
  Component,
  Input,
  OnInit
} from '@angular/core';


@Component({

  selector:'app-lead-details',

  templateUrl:'./lead-details.component.html',

  styleUrls:['./lead-details.component.css']

})
export class LeadDetailsComponent implements OnInit {


  @Input()
  leadId!:number;



  lead:any = {


    leadId:1,

    customerName:'Rahul Sharma',

    phoneNo:'9876543210',

    email:'rahul@gmail.com',

    category:'IT',

    city:'Delhi',

    address:'New Delhi',

    leadSource:'Website',

    assignedTo:'John',

    status:'NEW',

    priority:'HIGH',

    createdDate:'2026-07-08'


  };



  ngOnInit():void{


    /*
       Later:

       this.leadService
       .getLeadById(this.leadId)
       .subscribe(data=>{

          this.lead=data;

       })

    */


  }



}