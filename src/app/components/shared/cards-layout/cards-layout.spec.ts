import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCardsLayout } from './about-cards-layout';

describe('AboutCardsLayout', () => {
  let component: AboutCardsLayout;
  let fixture: ComponentFixture<AboutCardsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCardsLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCardsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
