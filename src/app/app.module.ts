import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers:[{ provide: LocationStrategy, useClass: PathLocationStrategy }, ]
})
export class AppModule { }
