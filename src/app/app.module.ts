import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProjectModalComponent, AboutMeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
