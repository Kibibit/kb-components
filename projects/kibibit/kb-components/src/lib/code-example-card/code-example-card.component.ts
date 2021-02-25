import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'kb-code-example-card',
  templateUrl: './code-example-card.component.html',
  styleUrls: ['./code-example-card.component.scss']
})
export class CodeExampleCardComponent implements OnInit, OnChanges {

  @Input()
  exampleName = '';
  @Input()
  title = '';
  @Input()
  description = '';

  exampleHTML = '';
  exampleTS = '';
  exampleSCSS = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const exampleName: SimpleChange = changes.exampleName;
    console.log('prev exampleName: ', exampleName.previousValue);
    console.log('got exampleName: ', exampleName.currentValue);

    const url = `https://kibibit.io/kb-components-examples/${exampleName.currentValue}`;

    forkJoin(
      this.http.get<string>(`${url}/html.html`, { responseType: 'text' as 'json' }).pipe(catchError((err) => of(''))),
      this.http.get<string>(`${url}/ts.ts`, { responseType: 'text' as 'json' }).pipe(catchError((err) => of(''))),
      this.http.get<string>(`${url}/scss.scss`, { responseType: 'text' as 'json' }).pipe(catchError((err) => of('')))
    )
      .subscribe((allResults) => {
        const [HTML, TS, SCSS] = allResults;

        this.exampleHTML = HTML;
        this.exampleTS = TS;
        this.exampleSCSS = SCSS;
      });
  }

}
