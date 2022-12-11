import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { LandPageComponent } from './land-page/land-page.component';
import { AuthenticationGuard } from './util/authentication.guard';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: LandPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent, canActivate: [AuthenticationGuard] },
  { path: 'add', component: AddComponent, canActivate: [AuthenticationGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthenticationGuard], children: [{ path: 'edit', component: EditComponent }]},
  { path: 'view/:id', component: ViewComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthenticationGuard] },
  { path: 'not-authorized', component: NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule { }
