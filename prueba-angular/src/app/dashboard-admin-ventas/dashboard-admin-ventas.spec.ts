import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminVentas } from './dashboard-admin-ventas';

describe('DashboardAdminVentas', () => {
  let component: DashboardAdminVentas;
  let fixture: ComponentFixture<DashboardAdminVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAdminVentas],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminVentas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
