import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFileButtonComponent } from './open-file-button.component';

describe('OpenFileButtonComponent', () => {
  let component: OpenFileButtonComponent;
  let fixture: ComponentFixture<OpenFileButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenFileButtonComponent]
    });
    fixture = TestBed.createComponent(OpenFileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
