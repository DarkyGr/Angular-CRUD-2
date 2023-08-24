import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVueloComponent } from './detalles-vuelo.component';

describe('DetallesVueloComponent', () => {
  let component: DetallesVueloComponent;
  let fixture: ComponentFixture<DetallesVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesVueloComponent]
    });
    fixture = TestBed.createComponent(DetallesVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
