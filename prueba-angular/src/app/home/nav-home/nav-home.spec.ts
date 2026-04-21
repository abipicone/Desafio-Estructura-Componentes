import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHome } from './nav-home';

describe('NavHome', () => {
  let component: NavHome;
  let fixture: ComponentFixture<NavHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavHome],
    }).compileComponents();

    fixture = TestBed.createComponent(NavHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
