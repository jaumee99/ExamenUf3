import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlistatPaginatComponent } from './Project/components/llistat-paginat/llistat-paginat.component';
import { LlistatTitolArtistaComponent } from './Project/components/llistat-titol-artista/llistat-titol-artista.component';

@NgModule({
  declarations: [
    AppComponent,
    LlistatPaginatComponent,
    LlistatTitolArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
