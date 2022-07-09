import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ProductsDetailComponent } from './components/admin/products-detail/products-detail.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminGuard } from './services/guards/admin.guards';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersComponent } from './components/admin/users/users.component';
import { PostsComponent } from './components/admin/posts/posts.component';
import { PostAddComponent } from './components/admin/post-add/post-add.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { WorkComponent } from './components/admin/work/work.component';
import { WorkAddComponent } from './components/admin/work-add/work-add.component';
import { DetailworkComponent } from './components/detailwork/detailwork.component';
import { WorksComponent } from './components/works/works.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: "", component: HomePageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'works', component: WorksComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: 'detail/:id', component: PostdetailComponent },
      { path: 'detailwork/:id', component: DetailworkComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductsComponent },
      { path: 'add', component: ProductAddComponent },
      { path: 'edit/:id', component: ProductAddComponent },
      { path: 'detail/:id', component: ProductsDetailComponent },

      { path: 'users', component: UsersComponent },

      { path: 'posts', component: PostsComponent },
      { path: 'post/add', component: PostAddComponent },
      { path: 'post/:id', component: ProductsDetailComponent },
      { path: 'post/edit/:id', component: PostAddComponent },

      { path: 'works', component: WorkComponent },
      { path: 'works/add', component: WorkAddComponent },
      { path: 'works/edit/:id', component: WorkAddComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
