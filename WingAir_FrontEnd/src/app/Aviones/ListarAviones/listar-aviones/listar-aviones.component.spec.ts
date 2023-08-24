import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAvionesComponent } from './listar-aviones.component';

describe('ListarAvionesComponent', () => {
  let component: ListarAvionesComponent;
  let fixture: ComponentFixture<ListarAvionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAvionesComponent]
    });
    fixture = TestBed.createComponent(ListarAvionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
