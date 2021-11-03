import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { MetricasComponent } from './components/metricas/metricas.component';
import { IndustriasComponent } from './components/industrias/industrias.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BannerComponent,
    BeneficiosComponent,
    ServiciosComponent,
    MetricasComponent,
    IndustriasComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
