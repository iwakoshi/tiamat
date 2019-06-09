import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';
import { ElementComponent } from './components/element/element.component';
import { ElementDirective } from './directives/element.directive';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';
import { DraggableDirective } from './directives/draggable.directive';
import { DroppableDirective } from './directives/droppable.directive';

@NgModule({
  declarations: [
    ElementComponent,
    ElementDirective,
    DraggableDirective,
    DroppableDirective,
    KeepHtmlPipe,
  ],
  entryComponents: [
    ElementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ElementComponent,
    ElementDirective,
    DraggableDirective,
    DroppableDirective,
    KeepHtmlPipe,
  ]
})
export class SharedModule { }
