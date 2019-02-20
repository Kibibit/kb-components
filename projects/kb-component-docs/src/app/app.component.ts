import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';
import { CreateNotification, NotificationsService } from '@kibibit/kb-components';
import { Chance } from 'chance';
import { MatMenuTrigger, ErrorStateMatcher } from '@angular/material';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as _moment from 'moment';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

const moment = _moment;

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'kb-docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private chance = new Chance();
  @ViewChild('search') search: ElementRef;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  oldDate1 = moment().subtract(moment.duration(3, 'minutes'));
  oldDate2 = moment().subtract(moment.duration(10, 'hours'));
  oldDate3 = moment().subtract(moment.duration(6, 'days'));
  formFieldErrors = { required: true, pattern: true };
  notifications: any[] = [];
  version: string = environment.VERSION;
  title = 'kb-components';

  // EXAMPLES
  content = [
    'Hello there! This kb-highlighted-text should highlight all',
    'the sections matching the searchTerm (initially: hello). It is case insensitive',
    'so it should find all the instances regardless'
  ].join(' ');
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

  // COMPONENTS
  documentedComponents = {
    HighlightedTextComponent: {
      title: 'HighlightedTextComponent',
      description: 'highlights a search term inside a string of text',
      exampleName: 'highlighted-text'
    },
    ElevationDirective: {
      title: 'ElevationDirective',
      description: 'Directive to apply Angular Material elevation classes on hover',
      exampleName: 'kb-elevation'
    },
    NotificationsService: {
      title: 'NotificationsService',
      description: 'Saves notification as a capped collection in indexedDB.',
      exampleName: 'notifications-service'
    },
    TimeAgoPipe: {
      title: 'TimeAgoPipe',
      description: `Takes a date and shows it's value as a distance from 'now'.`,
      exampleName: 'time-ago-pipe'
    },
    SingleObjectKeyPipe: {
      title: 'SingleObjectKeyPipe',
      exampleName: 'single-object-key-pipe',
      description: 'a pipe to always get the first object attribute. pipe-alias: kbSingleError'
    }
  };

  constructor(private notificationsService: NotificationsService) { }

  ngAfterViewInit() {
    const obs = from(this.notificationsService.getAll());

    obs.pipe(delay(1)).subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }

  addNotification(): Promise<any> {
    return this.notificationsService.add(this.createNotification())
      .then(() => this.notificationsService.getAll())
      .then((notifications: Notification[]) => this.notifications = notifications)
      .then(() => this.notifications[0].class = 'added');
  }

  private createNotification(): CreateNotification {
    const type = this.chance.pickone(['created', 'starred']);
    return {
      title: type === 'created' ? 'Folder created successfully' : 'Folder Added to Favorites',
      state: 'success',
      item: { whatever: 'you want!' },
      type: this.chance.pickone(['created', 'starred'])
    };
  }
}
