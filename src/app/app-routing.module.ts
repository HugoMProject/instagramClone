import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { HomeComponent } from './home/home/home.component';
import { VigilanteGuard } from './shared/vigilante.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component: FormLoginComponent },
  {path:'home',component: HomeComponent, canActivate:[VigilanteGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
