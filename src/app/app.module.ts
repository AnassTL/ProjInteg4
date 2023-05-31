import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {RouterOutlet} from "@angular/router";
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
