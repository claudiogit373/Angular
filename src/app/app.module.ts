import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //Declaraciones, componente, directivas
    AppComponent,
    ExampleComponent
  ],
  imports: [//solo se importan modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
