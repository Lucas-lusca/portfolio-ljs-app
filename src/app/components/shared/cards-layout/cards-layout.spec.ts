import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLayout } from './cards-layout';

describe('AboutCardsLayout', () => {
  let component: CardsLayout;
  let fixture: ComponentFixture<CardsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
