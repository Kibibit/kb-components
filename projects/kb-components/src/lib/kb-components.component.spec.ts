import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbComponentsComponent } from './kb-components.component';

describe('KbComponentsComponent', () => {
  let component: KbComponentsComponent;
  let fixture: ComponentFixture<KbComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
