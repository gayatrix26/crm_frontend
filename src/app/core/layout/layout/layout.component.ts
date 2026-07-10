import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  isSidebarCollapsed = false;

  isMobileSidebarOpen = false;

  toggleSidebar() {

    if(window.innerWidth <= 767){

      this.isMobileSidebarOpen = !this.isMobileSidebarOpen;

    }
    else{

      this.isSidebarCollapsed = !this.isSidebarCollapsed;

    }

  }

 

  showReminder = false;
  showNotifications = false;

  toggleReminder() {
    this.showNotifications = false;     // close the other panel
    this.showReminder = !this.showReminder;
  }

  toggleNotifications() {
    this.showReminder = false;          // close the other panel
    this.showNotifications = !this.showNotifications;
  }
}

