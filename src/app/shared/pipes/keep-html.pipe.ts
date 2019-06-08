import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'keepHtml',
  pure: false
})
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanetize: DomSanitizer) { }

  transform(content: string) {
    return this.sanetize.bypassSecurityTrustHtml(content);
  }
}
