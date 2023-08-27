import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinNowComponent } from './join-now.component';

describe('JoinNowComponent', () => {
  let component: JoinNowComponent;
  let fixture: ComponentFixture<JoinNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinNowComponent]
    });
    fixture = TestBed.createComponent(JoinNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
