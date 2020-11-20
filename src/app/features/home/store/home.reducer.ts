import * as HomeActions from './home.actions';
import { WeatherInfo } from '../../../core/models/weatherInfo.model';

export interface State {
  weatherData: WeatherInfo;
}

const initialState: State = {
  weatherData: null
};

export function homeReducer(
  state = initialState,
  action: HomeActions.HomeActions
) {

  switch (action.type) {
    case HomeActions.SET_WEATHER:
      return {
        ...state,
        weatherData: action.payload
      };
    default:
      return state;
  }
}
