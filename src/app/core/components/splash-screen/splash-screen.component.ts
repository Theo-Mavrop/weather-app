import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  showSplashScreen = true;
  opacityChange = 1;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.opacityChange = 0;

      setTimeout(() => {
        this.showSplashScreen = !this.showSplashScreen;
      }, 500);
    }, 3000);
  }

}
