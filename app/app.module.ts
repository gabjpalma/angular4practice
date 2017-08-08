import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //import for from (used for ng?)
import { HttpModule } from '@angular/http'; //import for httpModule (used to get post)
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component'; //import of created user.component file

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component'; //import for dataService (used for http, separates instructions on how to get data so that controller is focused on view)
 
const appRoutes: Routes = [ //create routes in variable and set in array
  {path:'', component:UserComponent}, //each route has an object (left blank to be homepage)
  {path: 'about', component:AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent //automatically added?
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) // add as import (passes in appRoutes)
  ],
  providers: [DataService], //put services here
  bootstrap: [AppComponent]
})
export class AppModule { }
