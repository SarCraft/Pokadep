import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonComponent } from './dragon.component';

describe('DragonComponent', () => {
  let component: DragonComponent;
  let fixture: ComponentFixture<DragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
