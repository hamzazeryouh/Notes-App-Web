import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveNotesComponent } from './remove-notes.component';

describe('RemoveNotesComponent', () => {
  let component: RemoveNotesComponent;
  let fixture: ComponentFixture<RemoveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
