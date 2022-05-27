import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFavouriteButton]'
})
export class FavouriteButtonDirective {

  constructor(private e1:ElementRef) { }
@HostListener('click') Toggle1(){
  if(this.e1.nativeElement.style.color=='red')
this.changeColor("black");  
else
this.changeColor("black");
}
changeColor(color:any){

this.e1.nativeElement.style.color=color;
}

}