import { Component, OnInit, NgModule, Compiler, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementDirective } from 'src/app/shared/directives/element.directive';

@Component({
  selector: 'tiamat-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  @ViewChild(ElementDirective, { static: false }) container: ElementDirective;
  constructor(
    private compiler: Compiler,
  ) { }

  ngOnInit() {
  }

  createElement(element: string) {
    const components = [Component({ template: element })(class { })];
    const tmpModule = NgModule({ imports: [SharedModule], declarations: components })(class { });
    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const comp = this.container.viewContainerRef.createComponent(factories.componentFactories[0]);
        comp.instance.droppable = true;
      });
  }
}
