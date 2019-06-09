import { CompilerFactory } from '@angular/core';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
