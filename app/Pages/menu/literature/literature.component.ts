import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../../bookservice.service';
import { FavservicesService } from '../../favservices.service';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css']
})
export class LiteratureComponent implements OnInit {

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
