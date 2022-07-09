import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/admin/products/products.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ProductsDetailComponent } from './components/admin/products-detail/products-detail.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersComponent } from './components/admin/users/users.component';
import { PostAddComponent } from './components/admin/post-add/post-add.component';
import { PostsComponent } from './components/admin/posts/posts.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { WorkComponent } from './components/admin/work/work.component';
import { WorkAddComponent } from './components/admin/work-add/work-add.component';
import { DetailworkComponent } from './components/detailwork/detailwork.component';
import { WorksComponent } from './components/works/works.component';
import { CategoryComponent } from './components/category/category.component';
// import { PostComponent } from './services/post/post.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductsDetailComponent,
    RegisterComponent,
    LoginComponent,
    HomePageComponent,
    DashboardComponent,
    HeaderAdminComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    UsersComponent,
    PostAddComponent,
    PostsComponent,
    PostdetailComponent,
    WorkComponent,
    WorkAddComponent,
    DetailworkComponent,
    WorksComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
