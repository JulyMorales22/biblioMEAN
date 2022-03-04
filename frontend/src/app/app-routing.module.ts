import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ListBookComponent } from './library/list-book/list-book.component';
import { RegisterBookComponent } from './library/register-book/register-book.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registerBook',
    component: RegisterBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listBook',
    component: ListBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
