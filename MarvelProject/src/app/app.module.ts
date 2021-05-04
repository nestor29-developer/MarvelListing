import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PublicObservable } from './ui/public/public-observable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './ui/public/public.component';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './core/services.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
    MatNativeDateModule
  ],
  providers: [
    PublicObservable,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 