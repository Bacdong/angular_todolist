import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DoashboardComponent } from './doashboard/doashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



const routes: Routes = [
  {path: '', redirectTo: '/doashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'doashboard', component: DoashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
