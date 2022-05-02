import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponent } from './Components/pesquisa/pesquisa.component';
import { PainelComponent } from './Components/painel/painel.component';
import { DisplayComponent } from './Components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    PainelComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
