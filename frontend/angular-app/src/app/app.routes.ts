
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Purchase } from './purchase/purchase';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetails },
  { path: 'purchase', component: Purchase },
];
import { Routes } from '@angular/router';
