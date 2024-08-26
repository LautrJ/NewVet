import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CategoryProductsListComponent } from './components/category-products-list/category-products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CguPageComponent } from './components/cgu-page/cgu-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: '*', redirectTo: '', pathMatch: 'full'},
    {path: 'categories', component: CategoriesPageComponent},
    {path: 'category/:id', component: CategoryProductsListComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'cgu', component: CguPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'signin', component: SigninPageComponent},

];
