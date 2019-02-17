import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KbComponentsModule } from '@kibibit/kb-components';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { LogoComponent } from './logo/logo.component';

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KbComponentsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
