import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';  
import { NotificationComponent } from './notification/notification.component';  
import bootstrap from "bootstrap";
import * as $ from 'jquery';

const routes: Routes = [
  {
      path: '',
      component: NotificationComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
