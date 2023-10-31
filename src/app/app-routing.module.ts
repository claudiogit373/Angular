import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
  },
  {
    path:'',//Todo: localhost:4200 string vacio
    component:HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m=>m.HomeModule)
  }
  // {
  //   path:'tracks',
  //   loadChildren:() => import(`./modules/tracks/tracks.module`).then(m=>m.TracksModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
