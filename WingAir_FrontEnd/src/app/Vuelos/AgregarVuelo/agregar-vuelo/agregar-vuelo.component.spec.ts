import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVueloComponent } from './agregar-vuelo.component';

describe('AgregarVueloComponent', () => {
  let component: AgregarVueloComponent;
  let fixture: ComponentFixture<AgregarVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVueloComponent]
    });
    fixture = TestBed.createComponent(AgregarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
