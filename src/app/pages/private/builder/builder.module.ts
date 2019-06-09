import { NgModule } from '@angular/core';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaletteComponent } from './palette/palette.component';
import { WindowComponent } from './window/window.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [BuilderComponent, PaletteComponent, WindowComponent, PropertiesComponent],
  imports: [
    SharedModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
