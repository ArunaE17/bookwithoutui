import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../bookservice.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.css']
})
export class DisplaybookComponent implements OnInit {

  constructor(private book:BookserviceService) { }

  bookData:any=[];
    ngOnInit(): void {
      this.book.getBooksInfo().subscribe((allData)=>{
          console.log(allData);
          this.bookData=allData;
      });
    
  }

  deleteBook(book_id:any){
    
    this.book.deleteBook( book_id).subscribe((result:any)=>{
      console.log(result);
     this.ngOnInit();
    });
  }

}
