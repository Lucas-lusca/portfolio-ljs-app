import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLayout } from './section-layout';

describe('SectionLayout', () => {
  let component: SectionLayout;
  let fixture: ComponentFixture<SectionLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
