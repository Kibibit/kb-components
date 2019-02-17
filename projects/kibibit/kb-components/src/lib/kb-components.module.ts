import { NgModule } from '@angular/core';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { CommonModule } from '@angular/common';
import { ElevationDirective } from './kb-elevation/kb-elevation.directive';

@NgModule({
  declarations: [HighlightedTextComponent, ElevationDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightedTextComponent, ElevationDirective]
})
export class KbComponentsModule { }
