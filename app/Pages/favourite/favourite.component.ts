import { Component, OnInit } from '@angular/core';
import { FavservicesService } from '../favservices.service';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public product:any=[];
  constructor(private favService:FavservicesService) { }

  ngOnInit(): void {
    this.favService.getBooks()
    .subscribe(res=>{
      this.product=res;

    })
  }
  removeFBook(item:any){
    this.favService.removeFavBook(item);
  }
  emptyFav(){
    this.favService.removeAllFav();
  }
}
