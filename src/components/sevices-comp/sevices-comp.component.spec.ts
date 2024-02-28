import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevicesCompComponent } from './sevices-comp.component';

describe('SevicesCompComponent', () => {
  let component: SevicesCompComponent;
  let fixture: ComponentFixture<SevicesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevicesCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevicesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
