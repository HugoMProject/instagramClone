import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { InfoComponent } from './info/info.component';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NavLeftComponent,
    BannerComponent,
    CardComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
