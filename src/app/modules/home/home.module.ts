import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared//shared.module';


@NgModule({
  declarations: [//componentes, directivas, pipes
    HomePageComponent
  ],
  imports: [//solo se importan modulos
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
