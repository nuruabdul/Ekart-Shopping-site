import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackground } from './CustomDirectives/SetBackground directive';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TopheaderComponent,
        TopMenuComponent,
        MainMenuComponent,
        SearchComponent,
        ContainerComponent,
        LoginComponent,
        PagesComponent,
        LayoutComponent,
        ProductListComponent,
        ProductComponent,
        FilterComponent,
        ProductDetailComponent,
        ViewchildrenComponent,
        NgTemplateComponent,
        NgContainerComponent,
        FeaturedBrandsComponent,
        SetBackground
    ],
       
    
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
       FormsModule

    ]
})
export class AppModule { }
