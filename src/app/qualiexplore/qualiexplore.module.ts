import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FiltersComponent } from './filters/filters.component';
import { FactorsComponent } from './factors/factors.component';
import { QualiexploreRoutingModule } from './qualiexplore-routing.module';


@NgModule({
  declarations: [FiltersComponent, FactorsComponent],
  imports: [
    CommonModule,
    QualiexploreRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class QualiexploreModule { }
