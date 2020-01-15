import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './commons/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { TokenInterceptorService } from './services/token-intercepter.service';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { RefreshComponent } from './commons/refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostsListComponent,
    PostComponent,
    CategoryListComponent,
    CategoryPageComponent,
    PostDetailComponent,
    LoginFormComponent,
    PostFormComponent,
    RefreshComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
