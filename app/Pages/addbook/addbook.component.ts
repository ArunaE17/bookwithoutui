import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{BookserviceService} from '../../bookservice.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private addbook:BookserviceService) { }
  addBook=new FormGroup({
    author:new FormControl( ''),
    title:new FormControl( ''),
    image:new FormControl( '')
   
});
  ngOnInit(): void {
  }
  SaveData(){
    //console.log(this.addBook.value);
    this.addbook.addBookData(this.addBook.value).subscribe((result)=>{
      console.log(result);
    });
  }
}
