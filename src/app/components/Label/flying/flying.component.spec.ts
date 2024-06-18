import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingComponent } from './flying.component';

describe('FlyingComponent', () => {
  let component: FlyingComponent;
  let fixture: ComponentFixture<FlyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
