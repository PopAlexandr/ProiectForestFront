// src/app/app-routing.module.js

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product-list/productcomponent';

const routes = [
  { path: '', component: ProductComponent },
  // add other routes for categories, orders, etc.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
