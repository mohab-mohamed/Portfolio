import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { AboutMeComponent } from '../app/components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
