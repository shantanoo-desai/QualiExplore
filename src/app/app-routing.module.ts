import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/qualiexplore/filters', pathMatch: 'full'
  },
  {
    path: 'qualiexplore',
    loadChildren: './qualiexplore/qualiexplore.module#QualiexploreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
