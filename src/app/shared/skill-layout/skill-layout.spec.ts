import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLayout } from './skill-layout';

describe('SkillLayout', () => {
  let component: SkillLayout;
  let fixture: ComponentFixture<SkillLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
