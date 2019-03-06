import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"auth",pathMatch:"full",component:AuthComponent},
  {path:"home",pathMatch:"full",component:HomeComponent},

  {path: '', pathMatch:"full", redirectTo :"auth"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
