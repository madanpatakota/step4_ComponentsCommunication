import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraditionalTwoWayParent } from './traditional-two-way-parent';

describe('TraditionalTwoWayParent', () => {
  let component: TraditionalTwoWayParent;
  let fixture: ComponentFixture<TraditionalTwoWayParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalTwoWayParent],
    }).compileComponents();

    fixture = TestBed.createComponent(TraditionalTwoWayParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
