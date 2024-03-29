import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { QrCodeModule } from 'ng-qrcode';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAccesoriosComponent } from './layout/layout-accesorios/layout-accesorios.component';
import { LayoutMaquinariaComponent } from './layout/layout-maquinaria/layout-maquinaria.component';
import { LayoutInsumosComponent } from './layout/layout-insumos/layout-insumos.component';
import { DataService } from './utils/data.service';
import { menuMaquinariaComponent } from './pages/menuMaquinaria/menuMaquinaria.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MenuInsumosComponent } from './pages/menu-insumos/menu-insumos.component';
import { MenuAccesoriosComponent } from './pages/menu-accesorios/menu-accesorios.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAccesoriosComponent,
    LayoutMaquinariaComponent,
    LayoutInsumosComponent,
    menuMaquinariaComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuInsumosComponent,
    MenuAccesoriosComponent,
    LoadingSpinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    QrCodeModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
