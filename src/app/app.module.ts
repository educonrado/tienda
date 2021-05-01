import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ExponentialPipe } from './exponential.pipe';
import { HightlightDirective } from './hightlight.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ExponentialPipe,
    HightlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
