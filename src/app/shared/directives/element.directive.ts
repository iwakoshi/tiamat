import { Directive, ViewContainerRef, Input } from '@angular/core';
import { Element } from '../models/element.model';

@Directive({
  selector: '[element]',
})
export class ElementDirective {
  @Input() element: Element;

  constructor(public viewContainerRef: ViewContainerRef) { }
}
