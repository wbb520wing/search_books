import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BooklistsComponent } from './booklists/booklists.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WordsLimitedPipe } from './words-limited.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistsComponent,
    WishlistComponent,
    WordsLimitedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
