import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAvionComponent } from './detalles-avion.component';

describe('DetallesAvionComponent', () => {
  let component: DetallesAvionComponent;
  let fixture: ComponentFixture<DetallesAvionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesAvionComponent]
    });
    fixture = TestBed.createComponent(DetallesAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
