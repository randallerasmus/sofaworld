import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  // { path: 'second-component', component: SecondComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
