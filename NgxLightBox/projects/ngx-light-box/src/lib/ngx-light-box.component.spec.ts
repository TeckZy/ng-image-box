import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLightBoxComponent } from './ngx-light-box.component';

describe('NgxLightBoxComponent', () => {
  let component: NgxLightBoxComponent;
  let fixture: ComponentFixture<NgxLightBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLightBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
