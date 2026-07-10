import { Component } from '@angular/core';

@Component({
  selector: 'app-lead-categories',
  templateUrl: './lead-categories.component.html',
  styleUrls: ['./lead-categories.component.css']
})
export class LeadCategoriesComponent {
  categories: string[] = [
    'Healthcare', 'Education', 'Automotive', 
    'Real Estate', 'Retail', 'Manufacturing', 
    'Finance', 'Technology'
  ];
}