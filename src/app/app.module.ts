import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/headerComponent/header/header.component';
import { AsideComponent } from './Components/asideComponent/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
