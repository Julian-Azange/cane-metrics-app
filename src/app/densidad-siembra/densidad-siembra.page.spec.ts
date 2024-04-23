import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DensidadSiembraPage } from './densidad-siembra.page';

describe('DensidadSiembraPage', () => {
  let component: DensidadSiembraPage;
  let fixture: ComponentFixture<DensidadSiembraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DensidadSiembraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
