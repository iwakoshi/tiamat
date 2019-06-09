import { Directive, Output, OnInit, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[droppable]'
})
export class DroppableDirective implements OnInit {

  @Output() droppable: EventEmitter<any> = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    const el = this.elementRef.nativeElement;

    // *Add a style to indicate that this element is a drop target
    el.addEventListener('dragenter', (e: DragEvent) => {
      console.log('dragenter' + e.target);
      console.log('e');
      console.log(e);
      console.log(this.elementRef);
      this.renderer.addClass(el, 'over');
    });

    // *Remove the style
    el.addEventListener('dragleave', (e: DragEvent) => {
      console.log('dragleave' + e.target);
      console.log(e.target);
      this.renderer.removeClass(el, 'over');
    });

    // *Over the element
    el.addEventListener('dragover', (e: DragEvent) => {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'copy';
    });

    // *On drop, get the data and convert it back to a JSON object
    // and fire off an event passing the data
    el.addEventListener('drop', (e: DragEvent) => {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      console.log(e.dataTransfer.getData('text'));
      this.droppable.emit(e.dataTransfer.getData('text'));

      // tslint:disable-next-line:prefer-const
      /*let data = document.getElementById(e.dataTransfer.getData('text')).cloneNode(true);

      console.log('drop' + e.target);
      console.log(data);
      console.log(this.countId++);

      if (data.attributes.getNamedItem('readonly')) {
          data.attributes.removeNamedItem('readonly');
      }
      if (data.attributes.getNamedItem('id')) {
          data.attributes.removeNamedItem('id');
      }
      if (data.attributes.getNamedItem('style')) {
          data.attributes.removeNamedItem('style');
      }
      if (data.attributes.getNamedItem('disabled')) {
          data.attributes.removeNamedItem('disabled');
      }
      if (data.attributes.getNamedItem('class')) {
          if (data.attributes.getNamedItem('class').ownerElement.classList.contains('show-grid')) {
              data.attributes.getNamedItem('class').ownerElement.classList.remove('show-grid');
              data.childNodes[1].removeChild(data.childNodes[1].firstChild);
              // data.attributes.setNamedItem(document.createAttribute('droppable'));
              // tslint:disable-next-line:prefer-const
              // let att2 = document.createAttribute('dropped');       // Create a "class" attribute
              // att2.value = 'onDrop($event, this)';
              // data.attributes.setNamedItem(att2);
          }
      }
      this.appendElement(e.target, data);

      // let objeto = new DOMParser().parseFromString(e.dataTransfer.getData('text/html'), 'text/xml');
      // el.innerHTML += e.dataTransfer.getData('text');
      this.getElementDrop(e.target).classList.remove('over');
      this.dropped.emit(data);
      return false;*/
    });
  }

  getElementDrop(el: any) {
    if (el.attributes.getNamedItem('droppable')) {
      return el;
    } else {
      if (!!el.parentElement) {
        return this.getElementDrop(el.parentElement);
      }
    }
  }

  /*appendElement(el: HTMLElement, data) {
      if (el.attributes.getNamedItem('droppable')) {
          el.appendChild(data);
      } else {
          if (!!el.parentElement) {
              this.appendElement(el.parentElement, data);
          }
      }
  }
}*/
}
