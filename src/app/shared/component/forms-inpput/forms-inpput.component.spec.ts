import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInpputComponent } from './forms-inpput.component';

describe('FormsInpputComponent', () => {
  let component: FormsInpputComponent;
  let fixture: ComponentFixture<FormsInpputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsInpputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsInpputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
