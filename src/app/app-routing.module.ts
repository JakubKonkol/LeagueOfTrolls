import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuildsComponent} from "./components/builds/builds.component";

const routes: Routes = [
  { path: '', component: BuildsComponent },
  { path: 'builds', component: BuildsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
