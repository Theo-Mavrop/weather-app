import { Action } from '@ngrx/store';
import { WeatherInfo } from '../../../core/models/weatherInfo.model';

export const SET_WEATHER = '[HOME] Set Weather';
export const FETCH_WEATHER_BY_COORDS = '[Home] Fetch Weather By Coords';
export const FETCH_WEATHER_BY_NAME = '[Home] Fetch Weather By Name';

export class FetchWeatherByCoords implements Action {
  readonly type = FETCH_WEATHER_BY_COORDS;

  constructor(public payload: { lon: number, lat: number }) {}
}

export class FetchWeatherByName implements Action {
  readonly type = FETCH_WEATHER_BY_NAME;

  constructor(public payload: string) {}
}

export class SetWeather implements Action {
  readonly type = SET_WEATHER;

  constructor(public payload: WeatherInfo) {}
}

export type HomeActions =
  | FetchWeatherByCoords
  | FetchWeatherByName
  | SetWeather;
