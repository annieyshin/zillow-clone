import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZestimateComponent } from './zestimate.component';

describe('ZestimateComponent', () => {
  let component: ZestimateComponent;
  let fixture: ComponentFixture<ZestimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZestimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZestimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
