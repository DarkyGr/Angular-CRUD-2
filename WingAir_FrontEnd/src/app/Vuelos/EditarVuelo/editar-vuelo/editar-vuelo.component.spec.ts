import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVueloComponent } from './editar-vuelo.component';

describe('EditarVueloComponent', () => {
  let component: EditarVueloComponent;
  let fixture: ComponentFixture<EditarVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarVueloComponent]
    });
    fixture = TestBed.createComponent(EditarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
