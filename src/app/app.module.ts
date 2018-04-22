import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{HttpModule} from '@angular/http';
import {NewsService} from './services/news.service';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
   
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
