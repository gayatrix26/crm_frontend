import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/interfaces/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user!: User;


  editMode = false;

  changePasswordMode = false;

  newPassword = '';



  constructor(
  private userService: UserService,
  private router: Router
){}



  ngOnInit(): void {

    this.loadProfile();

  }



  goToDashboard(){

  this.router.navigate(['/app/dashboard']);

}

  loadProfile(){

    const storedUser =
    localStorage.getItem('loggedInUser');


    if(storedUser){


      const loggedUser:User =
      JSON.parse(storedUser);



      this.userService
      .getUserByIdObject(loggedUser.userId!)
      .subscribe({

        next:(response)=>{

          this.user=response;

        },

        error:(err)=>{

          console.error(err);

        }

      });


    }

  }





  toggleEdit(){


    if(this.editMode){

      this.updateProfile();

    }


    this.editMode=!this.editMode;


  }





  updateProfile(){


    this.userService
    .updateUserObject(
      this.user.userId!,
      this.user
    )
    .subscribe({

      next:(response)=>{


        this.user=response;


        localStorage.setItem(
          'loggedInUser',
          JSON.stringify(response)
        );


        alert("Profile updated successfully");


      },

      error:(err)=>{

        console.error(err);

      }

    });


  }





  togglePasswordChange(){


    if(this.changePasswordMode){

      this.user.password=this.newPassword;


      this.updateProfile();

      this.newPassword='';

    }


    this.changePasswordMode=
    !this.changePasswordMode;


  }


}