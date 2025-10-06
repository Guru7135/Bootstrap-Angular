import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionsRoutingModule } from './interactions-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { DatatableCrudComponent } from '../datatable-crud/datatable-crud.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientListComponent } from './client-list/client-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ArchiveClientComponent } from "./archive-client/archive-client.component";


@NgModule({
  declarations: [
    ClientsComponent,
    ClientListComponent,
    DatatableCrudComponent,
    ContactsComponent,
    ArchiveClientComponent
  ],
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    NgxDatatableModule,
]
})
export class InteractionsModule { }
