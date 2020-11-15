import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
