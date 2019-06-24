import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.page';
import { AboutPageComponent } from './pages/about/about.page';
import { ContactPageComponent } from './pages/contact/contact.page';

import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { APIService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PostPageComponent } from './pages/post/post.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PostPageComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
