import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientFormComponent } from '../client-form/client-form.component';
import { DatatableCrudComponent } from '../datatable-crud/datatable-crud.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    ClientFormComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
