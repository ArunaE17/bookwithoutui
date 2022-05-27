import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { FictionComponent } from './Pages/menu/fiction/fiction.component';
import { FavouriteComponent } from './Pages/favourite/favourite.component';
import { HorrorComponent } from './Pages/menu/horror/horror.component';
import { LiteratureComponent } from './Pages/menu/literature/literature.component';
import { FavButtonDirective } from './Pages/menu/fav-button.directive';
import { FavouriteButtonDirective } from './Pages/favourite/favourites-button.directive';
import { SliderComponent } from './Pages/home/slider/slider.component';
import { SignupComponent } from './Pages/signup/signup.component';
import{HttpClientModule} from '@angular/common/http';
import { AddbookComponent } from './Pages/addbook/addbook.component';
import{ReactiveFormsModule} from '@angular/forms';
import { DisplaybookComponent } from './Pages/displaybook/displaybook.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    FavouriteComponent,
    HorrorComponent,
    LiteratureComponent,
    FavButtonDirective,
    FavouriteButtonDirective,
    SliderComponent,
    SignupComponent,
    FictionComponent,
    AddbookComponent,
    DisplaybookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
