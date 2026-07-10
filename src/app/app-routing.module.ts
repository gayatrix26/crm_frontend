import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout/layout.component';

// Auth Components
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

// Other Components
import { LeadCategoriesComponent } from './features/lead-categories/lead-categories.component';
import { FollowupsComponent } from './features/followups/followups.component';
import { NotesComponent } from './features/notes/notes.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [

  // ==========================
  // Default Route
  // ==========================

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // ==========================
  // Authentication
  // ==========================

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  // ==========================
  // Main Application
  // ==========================

  {
    path: 'app',
    component: LayoutComponent,

    children: [

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module')
            .then(m => m.DashboardModule)
      },

      {
        path: 'leads',
        loadChildren: () =>
          import('./features/leads/leads.module')
            .then(m => m.LeadsModule)
      },

      {
        path: 'lead-categories',
        component: LeadCategoriesComponent
      },

      {
        path: 'followups',
        component: FollowupsComponent
      },

      {
        path: 'notes',
        component: NotesComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]

  },

  // ==========================
  // Wildcard
  // ==========================

  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }