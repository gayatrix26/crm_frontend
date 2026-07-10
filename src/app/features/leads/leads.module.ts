import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadTableComponent } from './lead-table/lead-table.component';
import { LeadSearchComponent } from './lead-search/lead-search.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { EditLeadComponent } from './edit-lead/edit-lead.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    LeadListComponent,
    LeadTableComponent,
    LeadSearchComponent,
    TableFilterComponent,
    LeadFormComponent,
    AddLeadComponent,
    EditLeadComponent,
    LeadDetailsComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class LeadsModule { }
