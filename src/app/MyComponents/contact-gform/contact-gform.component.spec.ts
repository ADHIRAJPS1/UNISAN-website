import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGformComponent } from './contact-gform.component';

describe('ContactGformComponent', () => {
  let component: ContactGformComponent;
  let fixture: ComponentFixture<ContactGformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactGformComponent]
    });
    fixture = TestBed.createComponent(ContactGformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
