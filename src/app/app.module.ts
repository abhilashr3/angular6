import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
<<<<<<< HEAD
import { AngularFontAwesomeModule } from 'angular-font-awesome';
=======
import {AngularFontAwesomeModule} from 'angular-font-awesome';
>>>>>>> 186d778edd0cbce7ebfc56af1bf67764d284a340

@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
