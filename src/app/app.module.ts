import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { RegisterComponent } from './module/register/register.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { TopupComponent } from './module/topup/topup.component';
import { PurchaseComponent } from './module/purchase/purchase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TopupComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
