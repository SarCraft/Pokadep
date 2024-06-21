import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizeCardComponent } from './minimize-card.component';

describe('MinimizeCardComponent', () => {
  let component: MinimizeCardComponent;
  let fixture: ComponentFixture<MinimizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimizeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
