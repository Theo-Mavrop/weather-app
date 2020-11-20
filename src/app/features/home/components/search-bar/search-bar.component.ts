import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  getLocation(): void {
    debugger;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.store.dispatch(new HomeActions.FetchWeatherByCoords({ lat: latitude, lon: longitude}))
      });
    } else {
      //TODO: show in alert box
      console.log('No support for geolocation');
    }
  }

  // callApi(long, lat): void {
  //   const params = new HttpParams().set('lat', lat).set('lon', long).set('appid', environment.weatherAPIKey);
  //   this.http.get('https://api.openweathermap.org/data/2.5/weather', {
  //     params
  //   }).toPromise()
  //   .then(res => {
  //     debugger;
  //   });
  // }
}
