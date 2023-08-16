import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BuildsComponent } from './components/builds/builds.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ItemService} from "./service/ItemService";
import { MobileNavViewComponent } from './components/mobile-nav-view/mobile-nav-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BuildsComponent,
    DashboardComponent,
    MobileNavViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
