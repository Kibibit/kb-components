import { NgModule } from '@angular/core';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { CommonModule } from '@angular/common';
import { ElevationDirective } from './kb-elevation/kb-elevation.directive';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { SingleObjectKeyPipe } from './single-object-key/single-object-key.pipe';
import { SingleErrorPipe } from './single-error/single-error.pipe';

@NgModule({
  declarations: [HighlightedTextComponent, ElevationDirective, TimeAgoPipe, SingleObjectKeyPipe, SingleErrorPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightedTextComponent, ElevationDirective, TimeAgoPipe, SingleObjectKeyPipe, SingleErrorPipe]
})
export class KbComponentsModule { }
