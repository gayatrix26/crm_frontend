import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent {

 ;

  @Output() leadCreated = new EventEmitter<void>();
  showForm = false;

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  leadAdded(): void {

    this.closeForm();

    this.leadCreated.emit();

  }

}