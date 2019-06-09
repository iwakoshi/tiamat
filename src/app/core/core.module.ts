import { NgModule } from '@angular/core';
import { HeaderComponent } from '../pages/layout/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
