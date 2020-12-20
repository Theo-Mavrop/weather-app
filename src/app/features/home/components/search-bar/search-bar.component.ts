import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../../store/app.reducer';
import * as HomeActions from '../../store/home.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  cityName: string;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.store.dispatch(new HomeActions.FetchWeatherByCoords({ lat: latitude, lon: longitude}));
      });
    } else {
      //TODO: show in alert box
      console.log('No support for geolocation');
    }
  }

  getWeather(): void {
    if (this.cityName && this.cityName !== '') {
      this.store.dispatch(new HomeActions.FetchWeatherByName(this.cityName));
    }
  }
}
