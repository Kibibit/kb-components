import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';
import { CreateNotification, NotificationsService } from '@kibibit/kb-components';
import { Chance } from 'chance';
import { MatMenuTrigger } from '@angular/material';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'kb-docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private chance = new Chance();
  @ViewChild('search') search: ElementRef;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  notifications: any[] = [];
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
  content = [
    'Hello there! This kb-highlighted-text should highlight all',
    'the sections matching the searchTerm (initially: hello). It is',
    'case insensitive so it should find all the instances regardless'
  ].join(' ');
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
  kbNotificationsHTML = `
<button mat-raised-button
        kbElevation
        color="primary"
        (click)="addNotification()">
  Generate Notification
</button>

<button mat-button
        disabled="disabled">
  <i class="material-icons">
    notifications
  </i>
</button>
<mat-list role="list"
          class="notifications">
  <mat-list-item role="listitem"
                 class="kb-notification"
                 [class.added]="notification.class === 'added'"
                 *ngFor="let notification of notifications">
    <span style="display: flex;">
      <ng-container [ngSwitch]="notification.type">
        <mat-icon *ngSwitchCase="'created'">create_new_folder</mat-icon>
        <mat-icon *ngSwitchCase="'starred'">folder_special</mat-icon>
        <mat-icon *ngSwitchDefault>notification_important</mat-icon>
      </ng-container>
      <span style="white-space: normal;">{{ notification.title }}</span>
    </span>
    <div class="date">{{ notification.created | timeAgo }}</div>
  </mat-list-item>
  <mat-list-item role="listitem"
                *ngIf="notifications.length === 0">
    No notifications yet
  </mat-list-item>
</mat-list>
  `.trim();
  kbNotificationsCSS = `
  .notifications {
    padding: 8px 0;
    border-radius: 3px;
    max-width: 70%;
    background: rgba(0, 0, 0, 0.4);
  }

  .notifications ::ng-deep .mat-list-item {
    height: unset;
  }

  :host .kb-notification {
    &.added ::ng-deep .mat-list-item-content {
      animation: blink 500ms linear forwards;
    }

    ::ng-deep .mat-list-item-content {
      align-items: baseline;
      padding: 0.5em;
      margin-bottom: 0.5em;
      display: flex;
      min-width: 200px;
      line-height: 1.5em;
      height: auto;
      flex-direction: column;

      &:last-child {
        margin-bottom: 0;
      }

      .material-icons {
        font-size: 1.5em;
        margin-right: 0.2em;
      }

      .date {
        font-size: 0.8em;
        color: grey;
        padding-left: calc(27px + 0.2em);
      }
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
    `.trim();
  kbNotificationsTS = `
// ...
import { CreateNotification, NotificationsService } from '@kibibit/kb-components';
import { Chance } from 'chance';

@Component({
  // ...
})
export class AppComponent implements AfterViewInit {
  private chance = new Chance();

  constructor(private notificationsService: NotificationsService) {}

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
    `.trim();

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
