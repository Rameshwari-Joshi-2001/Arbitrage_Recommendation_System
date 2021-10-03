import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard} from './auth.guard';
import { AuthService } from './_services/auth.service';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TableComponent } from './table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
//import { UsertableComponent } from './usertable/usertable.component';
import {UserService}  from './user.service';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SavestockComponent } from './savestock/savestock.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatButtonToggleModule } from 
    '@angular/material/button-toggle'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,  
    AboutusComponent,
    FaqComponent,
    ProfileComponent,
    TableComponent,
    WatchlistComponent,
    SavestockComponent,
    AboutusComponent,
    FaqComponent,
    
    //UsertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [authInterceptorProviders,UserService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }