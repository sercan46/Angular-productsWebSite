import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdListDetailComponent } from './prod-list-detail/prod-list-detail.component';
import { ProdListComponent } from './prod-list.component';


const routes: Routes = [
  {path:'',component:ProdListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,CommonModule]
})
export class ProdListRoutingModule { }
