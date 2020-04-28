import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

import {Routes,RouterModule} from '@angular/router';
import { Home2Component } from './home2/home2.component'

const ROUTES:Routes = [
  {path:'home', component : HomeComponent},
  {path:'home/:id', component : HomeComponent},
  {path:'home2', component : Home2Component}
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES) 
    ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, Home2Component, HinputComponent, HlistComponent, HeditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
