import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from 'src/app/material-custom-module/material-custom-module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardsComponent } from './home/cards/cards.component';
import { PromiseComponent } from './home/promise/promise.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
