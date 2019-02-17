import { NgModule } from '@angular/core';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { CommonModule } from '@angular/common';
import { ElevationDirective } from './kb-elevation/kb-elevation.directive';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';

@NgModule({
  declarations: [HighlightedTextComponent, ElevationDirective, TimeAgoPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightedTextComponent, ElevationDirective, TimeAgoPipe]
})
export class KbComponentsModule { }
