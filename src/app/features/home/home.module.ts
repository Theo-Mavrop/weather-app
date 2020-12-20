import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherResultComponent } from './components/weather-result/weather-result.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    WeatherResultComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
