import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAeropuertosComponent } from './listar-aeropuertos.component';

describe('ListarAeropuertosComponent', () => {
  let component: ListarAeropuertosComponent;
  let fixture: ComponentFixture<ListarAeropuertosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAeropuertosComponent]
    });
    fixture = TestBed.createComponent(ListarAeropuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
