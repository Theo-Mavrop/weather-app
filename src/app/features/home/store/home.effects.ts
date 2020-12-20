import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import * as HomeActions from './home.actions';
import * as fromApp from '../../../store/app.reducer';
import { WeatherAPIConstants } from '../../../core/constants/weather-api.constants';
import { environment } from '../../../../environments/environment';
import { WeatherInfo } from '../../../core/models/weatherInfo.model';
@Injectable()
export class HomeEffects {
  @Effect()
  fetchWeatherByCoords = this.actions$.pipe(
    ofType(HomeActions.FETCH_WEATHER_BY_COORDS),
    switchMap((fetchAction: HomeActions.FetchWeatherByCoords) => {
      const params = new HttpParams()
        .set('lat', fetchAction.payload.lat.toString())
        .set('lon', fetchAction.payload.lon.toString())
        .set('units', WeatherAPIConstants.apiUnits)
        .set('appid', environment.weatherAPIKey);
      return this.http.get<WeatherInfo>(
        WeatherAPIConstants.apiUrl,
        { params });
    }),
    map(weatherInfo => {
      return new HomeActions.SetWeather(weatherInfo);
    })
  );

  @Effect()
  fetchWeatherByName = this.actions$.pipe(
    ofType(HomeActions.FETCH_WEATHER_BY_NAME),
    switchMap((fetchAction: HomeActions.FetchWeatherByName) => {
      const params = new HttpParams()
        .set('q', fetchAction.payload)
        .set('units', WeatherAPIConstants.apiUnits)
        .set('appid', environment.weatherAPIKey);
      return this.http.get<WeatherInfo>(
        WeatherAPIConstants.apiUrl,
        { params });
    }),
    map(weatherInfo => {
      return new HomeActions.SetWeather(weatherInfo);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
