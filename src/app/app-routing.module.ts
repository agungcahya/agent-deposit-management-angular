import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './module/register/register.component';
import {LoginComponent} from './module/login/login.component';
import {DashboardComponent} from './module/dashboard/dashboard.component';
import {TopupComponent} from './module/topup/topup.component';
import {PurchaseComponent} from './module/purchase/purchase.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'topup', component: TopupComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
