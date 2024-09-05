import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenLigasComponent } from './resumen-ligas.component';

describe('ResumenLigasComponent', () => {
  let component: ResumenLigasComponent;
  let fixture: ComponentFixture<ResumenLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenLigasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
