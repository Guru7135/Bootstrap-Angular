import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from '../client-form/client-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ArchiveClientComponent } from './archive-client/archive-client.component';
import { DatatableCrudComponent } from '../datatable-crud/datatable-crud.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
    children: [
      { path: '', redirectTo: 'list/active', pathMatch: 'full' },
      {
        path: 'list',
        component: ClientListComponent,
        children: [
          { path: 'active', component: DatatableCrudComponent },
          { path: 'archive', component: ArchiveClientComponent }
        ]
      },
      { path: 'create', component: ClientFormComponent },
      { path: 'update' + '/:id', component: ClientFormComponent }
    ]
  },
  {
    path: 'contacts',
    component: ClientsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ContactsComponent }
    ]
  },
  // Optional: fallback route
  { path: '**', redirectTo: 'clients/list/active' }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionsRoutingModule { }
