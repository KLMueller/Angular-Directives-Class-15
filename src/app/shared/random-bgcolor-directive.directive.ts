import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBGColorDirective]'
})
export class RandomBGColorDirectiveDirective implements OnInit {


  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
  let randColor = () =>  {
      return "#" + Math.floor(Math.random()*16777215).toString(16);
  }
  console.log(randColor());
  this.elementRef.nativeElement.style.backgroundColor=randColor()
  }
}
