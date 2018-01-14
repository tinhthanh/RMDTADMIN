import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeTheoLuocXemComponent } from './thong-ke-theo-luoc-xem.component';

describe('ThongKeTheoLuocXemComponent', () => {
  let component: ThongKeTheoLuocXemComponent;
  let fixture: ComponentFixture<ThongKeTheoLuocXemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongKeTheoLuocXemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeTheoLuocXemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
