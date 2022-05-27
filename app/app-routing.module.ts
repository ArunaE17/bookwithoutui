import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './Pages/favourite/favourite.component';
import { HomeComponent } from './Pages/home/home.component';
import { FictionComponent } from './Pages/menu/fiction/fiction.component';
import { HorrorComponent } from './Pages/menu/horror/horror.component';
import { LiteratureComponent } from './Pages/menu/literature/literature.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { AddbookComponent } from './Pages/addbook/addbook.component';
import { DisplaybookComponent } from './Pages/displaybook/displaybook.component';


const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'fiction',component:FictionComponent},
  {path:'horror',component:HorrorComponent},
  {path:'literature',component:LiteratureComponent},
  {path:'add',component:AddbookComponent},
  {path:'delete',component:DisplaybookComponent}
  
 
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
