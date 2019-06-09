import { NgModule, COMPILER_OPTIONS, CompilerFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JitCompiler, CompilerConfig } from '@angular/compiler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { createCompiler } from './core/create-compiler';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: JitCompiler, useFactory: createCompiler, deps: [CompilerFactory] },
    { provide: CompilerConfig, useValue: new CompilerConfig() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
