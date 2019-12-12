import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeConstructionComponent } from './home-details/components/home-construction/home-construction.component';
import { HomeProtectionComponent } from './home-protection/home-protection.component';
const routes: Routes = [
  {path: 'construction', component: HomeConstructionComponent},
  {path: 'protection', component: HomeProtectionComponent},
  {path: '**', component: HomeDetailsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
