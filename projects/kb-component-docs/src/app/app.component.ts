import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'kb-docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('search') search: ElementRef;

  version: string = environment.VERSION;
  title = 'kb-components';
  content = [
    'Hello there! This kb-highlighted-text should highlight all',
    'the sections matching the searchTerm (initially: hello). It is case insensitive',
    'so it should find all the instances regardless'
  ].join(' ');
  highlightHTML = `
<form class="example-form"
      autocomplete="off">
  <mat-form-field>
    <input matInput
          placeholder="Search Term"
          value="hello"
          (keyup)="0"
          #searchTerm>
  </mat-form-field>
</form>
<kb-highlighted-text [needle]="searchTerm.value"
                     [haystack]="content">
</kb-highlighted-text>
  `.trim();
  highlightTS = `
export class AppComponent {
  content = 'This is a nice hello world text. this is case insensitive: Hello';
}
  `.trim();
  kbElevationHTML = `
<div class="red-box"
     kbElevation
     raisedElevation="16">
</div>
  `.trim();
  kbElevationCSS = `
.red-box {
  width: 4em;
  height: 4em;
  background: red;
  margin: 0 1em;

  /* important for animation between states */
  transition: all 250ms;
}
  `.trim();
  install = 'npm install --save @kibibit/kb-components';
  include = `
// *.module.ts
// ...
import { KbComponentsModule } from '@kibibit/kb-components';

@NgModule({
  // ...
  imports: [
    // ...
    KbComponentsModule // <======= ADD THIS
  ],
  // ...
})
export class AppModule { }
  `.trim();
}
