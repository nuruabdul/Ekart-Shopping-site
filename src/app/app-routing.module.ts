import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ContainerComponent } from './container/container.component';
import { Route } from '@angular/router';
import { ProductListComponent } from './container/product-list/product-list.component';

export const routes: Routes = [
  
  {path: '', redirectTo:'container', pathMatch:'full'},
  {path: 'login', component:LoginComponent},

  {path: 'container', component:ContainerComponent },
  {path: 'Home', component:ProductListComponent },
  
   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
