import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'kb-docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string = environment.VERSION;
  title = 'kb-component';
  html = `
<kb-highlighted-text [needle]="searchTerm"
                     [haystack]="content">
</kb-highlighted-text>
  `.trim();
  ts = `
export class AppComponent {
  searchTerm = 'hello';
  content = 'This is a nice hello world text. this is case insensitive: Hello';
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
