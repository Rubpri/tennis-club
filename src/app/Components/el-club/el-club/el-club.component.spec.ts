import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElClubComponent } from './el-club.component';

describe('ElClubComponent', () => {
  let component: ElClubComponent;
  let fixture: ComponentFixture<ElClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
