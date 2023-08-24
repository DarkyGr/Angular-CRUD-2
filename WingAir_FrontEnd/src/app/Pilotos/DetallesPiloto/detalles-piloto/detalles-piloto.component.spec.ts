import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPilotoComponent } from './detalles-piloto.component';

describe('DetallesPilotoComponent', () => {
  let component: DetallesPilotoComponent;
  let fixture: ComponentFixture<DetallesPilotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPilotoComponent]
    });
    fixture = TestBed.createComponent(DetallesPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
