import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { FactorsComponent } from './factors/factors.component';
import { QualiexploreRoutingModule } from './qualiexplore-routing.module';


@NgModule({
  declarations: [FiltersComponent, FactorsComponent],
  imports: [
    CommonModule,
    QualiexploreRoutingModule
  ]
})
export class QualiexploreModule { }
