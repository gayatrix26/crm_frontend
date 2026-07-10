import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  private isDark = false;


  toggleTheme(){

    this.isDark = !this.isDark;


    if(this.isDark){

      document.documentElement.classList.add('dark-theme');

    }
    else{

      document.documentElement.classList.remove('dark-theme');

    }

  }


  getThemeStatus(){

    return this.isDark;

  }

}