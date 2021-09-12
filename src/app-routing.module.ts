import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VisitaPageComponent} from './app/components/visita-page/visita-page.component';
import {ManagmentRequestsPageComponent} from './app/managementComponents/managment-requests-page/managment-requests-page.component';
import {ManagementVisitsPageComponent} from './app/managementComponents/management-visits-page/management-visits-page.component';

const routes: Routes = [
  {path: 'apre/manage_requests', component: ManagmentRequestsPageComponent},
  {path: 'apre/home', component: ManagementVisitsPageComponent},
  {path: 'visits', component: VisitaPageComponent},

  {path: 'apre/manage_requests', redirectTo: ''},
  {path: 'apre/home', redirectTo: ''},
  {path: 'visits', redirectTo: ''},
  {path: 'apre', redirectTo: 'apre/home', pathMatch: 'full'},
  {path: '', redirectTo: 'visits', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
