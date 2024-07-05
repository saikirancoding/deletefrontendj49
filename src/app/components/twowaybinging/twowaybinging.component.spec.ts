import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybingingComponent } from './twowaybinging.component';

describe('TwowaybingingComponent', () => {
  let component: TwowaybingingComponent;
  let fixture: ComponentFixture<TwowaybingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwowaybingingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwowaybingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
