import { Component, OnInit, Input } from '@angular/core';

import { Element } from '../../models/element.model';

@Component({
  selector: 'tiamat-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: Element;

  constructor() { }

  ngOnInit() {
  }

  alert() {
    console.log(this.element.name);
  }

}
