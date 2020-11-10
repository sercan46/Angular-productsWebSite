import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdListDetailComponent } from './prod-list/prod-list-detail/prod-list-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'products', loadChildren: () => import('./prod/prod.module').then(m => m.ProdModule)},
  {path:'products-list', loadChildren: () => import('./prod-list/prod-list.module').then(m => m.ProdListModule)},
  {path:'products-list/selected-product/info/:id',component:ProdListDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
