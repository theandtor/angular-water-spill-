import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermeterComponent } from './watermeter.component';

describe('WatermeterComponent', () => {
  let component: WatermeterComponent;
  let fixture: ComponentFixture<WatermeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
