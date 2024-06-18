import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychicComponent } from './psychic.component';

describe('PsychicComponent', () => {
  let component: PsychicComponent;
  let fixture: ComponentFixture<PsychicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
