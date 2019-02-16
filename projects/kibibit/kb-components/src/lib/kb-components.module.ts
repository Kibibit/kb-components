import { NgModule } from '@angular/core';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HighlightedTextComponent],
  imports: [
    CommonModule
  ],
  exports: [HighlightedTextComponent]
})
export class KbComponentsModule { }
