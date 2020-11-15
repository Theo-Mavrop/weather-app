import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';



@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    SplashScreenComponent
  ]
})
export class CoreModule { }
