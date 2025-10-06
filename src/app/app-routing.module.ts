import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
    children:[
      {path:'interactions',loadChildren:() => import('../app/interactions/interactions.module').then(m=> m.InteractionsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
