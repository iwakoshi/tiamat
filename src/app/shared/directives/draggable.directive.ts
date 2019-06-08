import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements OnInit {
  @Input() draggable: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    const el = this.elementRef.nativeElement;

    el.addEventListener('dragstart', (e: DragEvent) => {
      console.log('Start');
      // el.classList.add('drag-src')
      console.log(e);
      console.log(this.elementRef);
      console.log(this.draggable);
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text', this.draggable);
    });

    // Remove the drag-src class
    el.addEventListener('dragend', (e: DragEvent) => {
      console.log('End');
      e.preventDefault();
      // el.classList.remove('drag-src');
    });
  }
}
