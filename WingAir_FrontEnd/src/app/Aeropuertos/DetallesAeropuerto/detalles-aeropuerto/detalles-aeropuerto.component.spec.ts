import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAeropuertoComponent } from './detalles-aeropuerto.component';

describe('DetallesAeropuertoComponent', () => {
  let component: DetallesAeropuertoComponent;
  let fixture: ComponentFixture<DetallesAeropuertoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesAeropuertoComponent]
    });
    fixture = TestBed.createComponent(DetallesAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
