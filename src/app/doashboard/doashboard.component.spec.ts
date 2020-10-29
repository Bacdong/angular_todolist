import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoashboardComponent } from './doashboard.component';

describe('DoashboardComponent', () => {
  let component: DoashboardComponent;
  let fixture: ComponentFixture<DoashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
