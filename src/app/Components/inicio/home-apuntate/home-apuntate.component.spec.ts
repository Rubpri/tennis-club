import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApuntateComponent } from './home-apuntate.component';

describe('HomeApuntateComponent', () => {
  let component: HomeApuntateComponent;
  let fixture: ComponentFixture<HomeApuntateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeApuntateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeApuntateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
