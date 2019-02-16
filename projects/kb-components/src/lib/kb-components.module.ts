import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KbComponentsComponent } from './kb-components.component';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { ComponentExampleComponent } from './component-example/component-example.component';

@NgModule({
  declarations: [KbComponentsComponent, HighlightedTextComponent, ComponentExampleComponent],
  imports: [
    CommonModule
  ],
  exports: [KbComponentsComponent, HighlightedTextComponent, ComponentExampleComponent]
})
export class KbComponentsModule { }
