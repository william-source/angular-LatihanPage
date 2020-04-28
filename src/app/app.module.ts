import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

import {Routes,RouterModule} from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { TesComponent } from './tes/tes.component'

const ROUTES:Routes = [
  {path:'home', component : HomeComponent},
  {path:'home/:id', component : HomeComponent},
  {path:'home2', component : Home2Component},
  {path:'tes',component:TesComponent},
  {path:'home2/:nama/:jurusan/:alamat',component:Home2Component}
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES) 
    ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, Home2Component, TesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
