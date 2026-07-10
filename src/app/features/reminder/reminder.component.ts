import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {

  selectedDate: Date = new Date();   // Default to today

  onDateChange() {
    // TODO: Load follow-ups for selected date
    console.log('Selected date:', this.selectedDate);
  }
}