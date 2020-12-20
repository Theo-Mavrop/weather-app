import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromApp from '../../../../store/app.reducer';
import { WeatherInfo } from '../../../../core/models/weatherInfo.model';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  weatherData: WeatherInfo;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('homePage')
      .pipe(map((homePageState) => homePageState.weatherData))
      .subscribe((weatherData: WeatherInfo) => {
        this.weatherData = weatherData;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
