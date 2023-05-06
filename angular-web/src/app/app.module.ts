import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { SecRightComponent } from './second-section/sec-right/sec-right.component';
import { SecLeftComponent } from './second-section/sec-left/sec-left.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroContentComponent } from './hero-banner/hero-content/hero-content.component';
import { HeroImageComponent } from './hero-banner/hero-image/hero-image.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SectionThirdComponent } from './section-third/section-third.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes : Routes=[
{path:'home',component: HomeComponent},
{path:'about',component: AboutComponent},
{path:'gallery',component: GalleryComponent},
{path:'products',component: ProductsComponent},
{path:'contact',component: ContactComponent},
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
