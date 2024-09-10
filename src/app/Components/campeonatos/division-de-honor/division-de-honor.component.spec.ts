import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionDeHonorComponent } from './division-de-honor.component';

describe('DivisionDeHonorComponent', () => {
  let component: DivisionDeHonorComponent;
  let fixture: ComponentFixture<DivisionDeHonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionDeHonorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionDeHonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
