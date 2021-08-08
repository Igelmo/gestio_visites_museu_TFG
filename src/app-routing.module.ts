import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VisitaPageComponent} from './app/components/visita-page/visita-page.component';
import {ManagmentRequestsPageComponent} from './app/components/managment-requests-page/managment-requests-page.component';

const routes: Routes = [
  { path: 'apre/manage_requests', component: ManagmentRequestsPageComponent },
  { path: '', component: VisitaPageComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
