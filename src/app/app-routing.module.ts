import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthUserGuard } from './auth/guards/auth-user.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [AuthUserGuard]},
  {
    path: "", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule), canActivate: [AuthUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
