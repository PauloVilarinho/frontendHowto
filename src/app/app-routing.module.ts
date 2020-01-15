import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { RefreshComponent } from './commons/refresh/refresh.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'category/:id', component: CategoryPageComponent},
  {path: 'post-form/:id', component: PostFormComponent },
  {path: 'post/:id', component: PostDetailComponent  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
