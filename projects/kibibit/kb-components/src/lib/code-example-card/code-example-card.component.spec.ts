import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExampleCardComponent } from './code-example-card.component';

describe('CodeExampleCardComponent', () => {
  let component: CodeExampleCardComponent;
  let fixture: ComponentFixture<CodeExampleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExampleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
