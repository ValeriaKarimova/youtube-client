import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Item } from './interfaces';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() declare appHighlight: Item;

  constructor(private el: ElementRef) {
    el = this.el;
  }

  ngOnChanges() {
    this.colorCards();
  }

  colorCards() {
    const today = Date.now();
    const publishedDate = Date.parse(this.appHighlight.snippet.publishedAt);
    const daysDifference = Math.ceil((today - publishedDate) / (1000 * 3600 * 24));
    switch(true) {
      case daysDifference < 7: this.el.nativeElement.style.borderBottom = '5px solid blue';
      break;
      case daysDifference > 7 && daysDifference < 30: this.el.nativeElement.style.borderBottom = '5px solid green';
      break;
      case daysDifference > 180: this.el.nativeElement.style.borderBottom = '5px solid red'
    }
  }

}
