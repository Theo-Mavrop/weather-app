import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromApp from '../../../store/app.reducer'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription
  showWeatherResults: boolean = false;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('homePage')
      .pipe(map((homePageState) => homePageState.weatherDataLoaded))
      .subscribe((weatherDataLoaded: boolean) => {
        this.showWeatherResults = weatherDataLoaded;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
