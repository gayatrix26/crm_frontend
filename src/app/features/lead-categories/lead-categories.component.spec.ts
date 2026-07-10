import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCategoriesComponent } from './lead-categories.component';

describe('LeadCategoriesComponent', () => {
  let component: LeadCategoriesComponent;
  let fixture: ComponentFixture<LeadCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
