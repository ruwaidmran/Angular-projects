import { Component, NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondSectionComponent } from './home/second-section/second-section.component';
import { SecRightComponent } from './home/second-section/sec-right/sec-right.component';
import { SecLeftComponent } from './home/second-section/sec-left/sec-left.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroContentComponent } from './hero-banner/hero-content/hero-content.component';
import { HeroImageComponent } from './hero-banner/hero-image/hero-image.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SectionThirdComponent } from './home/section-third/section-third.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoutes : Routes=[
{path:'home',component: HomeComponent},
{path:'about',component: AboutComponent},
{path:'gallery',component: GalleryComponent},
{path:'products',component: ProductsComponent},
{path:'contact',component: ContactComponent},
{path:'**',component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SecondSectionComponent,
    SecRightComponent,
    SecLeftComponent,
    HeroBannerComponent,
    HeroContentComponent,
    HeroImageComponent,
    TopNavComponent,
    SectionThirdComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
