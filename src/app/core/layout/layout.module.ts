import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
