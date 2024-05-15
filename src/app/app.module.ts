import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProductsComponent } from './Pages/products/products.component';
import { FeaturesComponent } from './Pages/features/features.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContainerComponent } from './Components/container/container.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    FeaturesComponent,
    ContactComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
