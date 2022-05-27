import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFavButton]'
})
export class FavButtonDirective {

  constructor(private e1:ElementRef) { }
@HostListener('click') Toggle1(){
  if(this.e1.nativeElement.style.color=='black')
this.changeColor("red");
else
this.changeColor("black");
}
changeColor(color:any){
  
this.e1.nativeElement.style.color=color;
}
}