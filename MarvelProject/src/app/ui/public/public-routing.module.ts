import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './character/detail/detail.component'
 
const routes: Routes = [
  { path: '', redirectTo: "inicio", pathMatch: "full" },

 
  {
    path: '',  
    children: [
      { path: 'inicio', component: HomeComponent },
      { path: 'character-detail', component: DetailComponent },
    ]
  },
 

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
