import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    SecondSectionComponent,
    SecRightComponent,
    SecLeftComponent,
    HeroBannerComponent,
    HeroContentComponent,
    HeroImageComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
