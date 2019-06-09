import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Compiler, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { GroupElement } from 'src/app/shared/models/group-element.model';
import { ElementService } from 'src/app/shared/services/element.service';
import { ElementDirective } from 'src/app/shared/directives/element.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'tiamat-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit, AfterViewInit {
  @ViewChildren(ElementDirective) viewElements: QueryList<ElementDirective>;
  groupElements$: Observable<GroupElement[]>;

  constructor(
    private elementService: ElementService,
    private compiler: Compiler,
  ) { }

  ngOnInit() {
    this.groupElements$ = this.elementService.getElements();
  }

  ngAfterViewInit() {
    this.viewElements.changes.subscribe((change: QueryList<ElementDirective>) => {
      this.loadComponent(change);
    });
  }
  loadComponent(containers: QueryList<ElementDirective>) {
    setTimeout(() => {
      const components = [];
      const tmpModule = NgModule({ imports: [SharedModule], declarations: components })(class { });
      containers.forEach((container, index) => {
        console.log('element [' + index + '] ::');
        components.push(Component({ template: container.element.content })(class { }));
      });
      this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
        .then((factories) => {
          containers.forEach((container, index) => {
            const cmpRef = container.viewContainerRef.createComponent(factories.componentFactories[index]);
            // cmpRef.instance.name = 'dynamic';
          });
        });
    }, 0);
  }
}
