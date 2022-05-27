import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavservicesService {
public favbookList:any=[]
public bookData=new BehaviorSubject<any>([]);
  constructor() { }
  getBooks(){
    return this.bookData.asObservable();
  }

  setProduct(product :any){
    this.favbookList.push(...product);
    this.bookData.next(product);
  }
  addtofav(product:any){
    this.favbookList.push(product);
    this.bookData.next(this.favbookList);
    console.log(this.favbookList)
  }
  removeFavBook(product:any){
    this.favbookList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.favbookList.splice(index,1);
      }
    })
  }
  removeAllFav(){
    this.favbookList=[]
    this.bookData.next(this.favbookList);
  }
}
