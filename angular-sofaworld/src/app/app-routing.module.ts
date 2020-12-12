import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccesoriesComponent} from "./accesories/accesories.component";
import {LookbookComponent} from "./lookbook/lookbook.component";
import {BlogComponent} from "./blog/blog.component";
import {PagesComponent} from "./pages/pages.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'accesories', component: AccesoriesComponent },
  { path: 'lookbook', component: LookbookComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
