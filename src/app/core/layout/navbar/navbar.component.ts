import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  @Output() toggleSidebar = new EventEmitter<void>();


  darkMode = false;


  constructor(
    private themeService: ThemeService,
    private router: Router

  ){}



  onToggleSidebar(){

    this.toggleSidebar.emit();

  }



  onToggleDarkMode(){

    this.darkMode = !this.darkMode;

    this.themeService.toggleTheme();

  }



   onLogout(){

    this.router.navigate(['/login']);

  }



  @Output() logout = new EventEmitter<void>();

}