import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraditionalTwoWayChild } from './traditional-two-way-child';

describe('TraditionalTwoWayChild', () => {
  let component: TraditionalTwoWayChild;
  let fixture: ComponentFixture<TraditionalTwoWayChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalTwoWayChild],
    }).compileComponents();

    fixture = TestBed.createComponent(TraditionalTwoWayChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
