import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExampleComponent } from 'src/app/example/example.component';
import { SideBarComponent } from '@shared//components/side-bar/side-bar.component';

const routes: Routes = [
  {
    path:'',//todo local host:4200 raiz
    component: HomePageComponent//HomePageComponent
  }
  // {
  //   path:'hello',//todo local host:4200 raiz
  //   component: ExampleComponent//HomePageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
