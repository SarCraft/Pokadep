import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairyComponent } from './fairy.component';

describe('FairyComponent', () => {
  let component: FairyComponent;
  let fixture: ComponentFixture<FairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FairyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
