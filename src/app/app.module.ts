import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModules } from './core/core.module';
import { FeatureModules } from './features/churches/components/features.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HttpClientModule } from "@angular/common/http";
import { ChurchEditContainer } from './pages/church-edit/church-edit.container';
import { ChurchCreateContainer } from './pages/church-create/church-create.container';

@NgModule({
  declarations: [
    AppComponent,
    ChurchEditContainer,
    ChurchCreateContainer

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CoreModules,
    FeatureModules,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
