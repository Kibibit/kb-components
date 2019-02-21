import { NgModule } from '@angular/core';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { CommonModule } from '@angular/common';
import { ElevationDirective } from './kb-elevation/kb-elevation.directive';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { SingleObjectKeyPipe } from './single-object-key/single-object-key.pipe';
import { SingleErrorPipe } from './single-error/single-error.pipe';
import { CodeExampleCardComponent } from './code-example-card/code-example-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [HighlightedTextComponent, ElevationDirective, TimeAgoPipe, SingleObjectKeyPipe, SingleErrorPipe, CodeExampleCardComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  exports: [HighlightedTextComponent, ElevationDirective, TimeAgoPipe, SingleObjectKeyPipe, SingleErrorPipe, CodeExampleCardComponent]
})
export class KbComponentsModule { }
