import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
   url='http://localhost:3000/Books';
   /*url='http://localhost:8080/book';*/
  constructor(private http:HttpClient) { }
  getBooksInfo()
  {
      return this.http.get(this.url);
  }
  addBookData(data:any){
    console.log(data);
    return this.http.post(this.url, data);

  }
  deleteBook(id:any){
    /*return this.http.delete('${this.url}/${id}');*/
    return this.http.delete('http://localhost:3000/Books/'+id);
  }
}
