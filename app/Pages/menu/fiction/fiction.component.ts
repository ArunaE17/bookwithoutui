import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../../bookservice.service';
import { FavservicesService } from '../../favservices.service';
@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent implements OnInit {
  
  constructor(private book:BookserviceService, private favService:FavservicesService) { }

    bookData:any=[];
    ngOnInit(): void {
      this.book.getBooksInfo().subscribe((allData)=>{
          console.log(allData);
          this.bookData=allData;
      });
    
  }
  addtofav(item:any){
    this.favService.addtofav(item);

  }

}
