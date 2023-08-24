import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPilotoComponent } from './agregar-piloto.component';

describe('AgregarPilotoComponent', () => {
  let component: AgregarPilotoComponent;
  let fixture: ComponentFixture<AgregarPilotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPilotoComponent]
    });
    fixture = TestBed.createComponent(AgregarPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
