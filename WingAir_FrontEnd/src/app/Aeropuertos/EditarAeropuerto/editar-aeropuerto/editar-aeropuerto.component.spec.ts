import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAeropuertoComponent } from './editar-aeropuerto.component';

describe('EditarAeropuertoComponent', () => {
  let component: EditarAeropuertoComponent;
  let fixture: ComponentFixture<EditarAeropuertoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAeropuertoComponent]
    });
    fixture = TestBed.createComponent(EditarAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
