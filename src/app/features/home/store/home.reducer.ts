import * as HomeActions from './home.actions';
import { WeatherInfo } from '../../../core/models/weatherInfo.model';

export interface State {
  weatherData: WeatherInfo;
  weatherDataLoaded: boolean;
}

const initialState: State = {
  weatherData: null,
  weatherDataLoaded: false
};

export function homeReducer(
  state = initialState,
  action: HomeActions.HomeActions
) {
  switch (action.type) {
    case HomeActions.SET_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
        weatherDataLoaded: true
      };
    default:
      return state;
  }
}
