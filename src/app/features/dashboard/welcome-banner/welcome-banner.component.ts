import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/interfaces/user.model';


@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {


  user!: User;



  constructor(
    private userService: UserService
  ){}




  ngOnInit(): void {

    this.loadUser();

  }




  loadUser(){


    const storedUser =
    localStorage.getItem('loggedInUser');



    if(storedUser){


      const loggedUser:User =
      JSON.parse(storedUser);



      this.userService
      .getUserByIdObject(loggedUser.userId!)
      .subscribe({


        next:(response)=>{


          this.user = response;


        },


        error:(err)=>{


          console.error(
            "Failed to load user",
            err
          );


        }


      });


    }


  }


}