import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LeadService } from '../../../core/services/lead.service';
import { LeadCategoryService } from '../../../core/services/lead-category.service';
import { UserService } from '../../../core/services/user.service';

import { LeadCategory } from '../../../models/interfaces/lead-category.model';
import { User } from '../../../models/interfaces/user.model';


@Component({

  selector: 'app-lead-form',

  templateUrl: './lead-form.component.html',

  styleUrls: ['./lead-form.component.css']

})
export class LeadFormComponent implements OnInit {


  @Input()
  isEditMode:boolean=false;


  @Input()
  leadId!:number;


  @Output()
  formSubmitted=new EventEmitter<void>();



  leadForm!:FormGroup;


  categories:LeadCategory[]=[];


  executives:User[]=[];



  sources:string[]=[

    'WEBSITE',
    'FACEBOOK',
    'INSTAGRAM',
    'REFERRAL',
    'WALK_IN',
    'NEWSPAPER',
    'TELE_CALL',
    'WHATSAPP'

  ];



  statuses:string[]=[

    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'LOST',
    'CLOSED'

  ];



  priorities:string[]=[

    'HOT',
    'WARM',
    'COLD'

  ];




  constructor(

    private fb:FormBuilder,

    private leadService:LeadService,

    private leadCategoryService:LeadCategoryService,

    private userService:UserService

  ){}




  ngOnInit():void{


    this.createForm();


    this.loadCategories();


    this.loadExecutives();


    if(this.isEditMode){

      this.loadLead();

    }


  }




  createForm(){


    this.leadForm=this.fb.group({


      customerName:[

        '',

        [

          Validators.required,

          Validators.maxLength(100)

        ]

      ],



      phoneNo:[

        '',

        [

          Validators.required,

          Validators.pattern('^[0-9]{10}$')

        ]

      ],



      email:[

        '',

        Validators.email

      ],



      category:[

        null,

        Validators.required

      ],



      city:[''],


      address:[''],



      leadSource:[

        '',

        Validators.required

      ],



      assignedTo:[

        null,

        Validators.required

      ],



      status:[

        'NEW',

        Validators.required

      ],



      priority:[

        'HOT',

        Validators.required

      ],



      createdDate:[

        new Date()
        .toISOString()
        .substring(0,10),

        Validators.required

      ]


    });


  }





  loadCategories(){


    this.leadCategoryService

    .getAllCategoriesList()

    .subscribe({


      next:(data)=>{


        this.categories=data;


        if(this.isEditMode){

          this.patchLeadData();

        }


      },


      error:(err)=>{


        console.error(

          'Failed to load categories',

          err

        );


      }


    });


  }





  loadExecutives(){


    this.userService

    .getAllUsersPage(0,100)

    .subscribe({


      next:(response)=>{


        this.executives=response.content;


        if(this.isEditMode){

          this.patchLeadData();

        }


      },


      error:(err)=>{


        console.error(

          'Failed to load users',

          err

        );


      }


    });


  }





  loadLead(){


    this.leadService

    .getLeadByIdObject(this.leadId)

    .subscribe({


      next:(lead)=>{


        this.leadForm.patchValue({


          customerName:lead.customerName,

          phoneNo:lead.phoneNo,

          email:lead.email,

          category:lead.category,

          city:lead.city,

          address:lead.address,

          leadSource:lead.leadSource,

          assignedTo:lead.assignedTo,

          status:lead.status,

          priority:lead.priority,

          createdDate:lead.createdDate


        });


      },


      error:(err)=>{


        console.error(

          'Failed to load lead',

          err

        );


      }


    });


  }





  patchLeadData(){


    // used only after dropdown data loads

    // prevents select fields from losing values


  }






  submitLead(){


    if(this.leadForm.invalid){


      this.leadForm.markAllAsTouched();

      return;


    }





    const value=this.leadForm.value;




    const payload:any={



      customerName:value.customerName,


      phoneNo:value.phoneNo,


      email:value.email,



      category:{

        categoryId:value.category.categoryId

      },



      city:value.city,


      address:value.address,



      leadSource:value.leadSource,



      assignedTo:{

        userId:value.assignedTo.userId

      },



      status:value.status,


      priority:value.priority,


      createdDate:value.createdDate



    };






    if(this.isEditMode){



      this.leadService

      .updateLeadObject(

        this.leadId,

        payload

      )

      .subscribe({


        next:(response)=>{


          console.log(

            'Lead updated',

            response

          );


          this.formSubmitted.emit();


        },


        error:(err)=>{


          console.error(

            'Lead update failed',

            err

          );


        }


      });



    }

    else{



      this.leadService

      .createLeadObject(payload)

      .subscribe({


        next:(response)=>{


          console.log(

            'Lead created',

            response

          );


          this.formSubmitted.emit();


          this.cancel();


        },


        error:(err)=>{


          console.error(

            'Lead creation failed',

            err

          );


        }


      });



    }



  }







  cancel(){


    this.leadForm.reset({


      category:null,


      assignedTo:null,


      status:'NEW',


      priority:'HOT',


      createdDate:new Date()

      .toISOString()

      .substring(0,10)


    });


  }



}