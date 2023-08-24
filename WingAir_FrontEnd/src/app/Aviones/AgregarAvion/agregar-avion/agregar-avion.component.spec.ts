import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAvionComponent } from './agregar-avion.component';

describe('AgregarAvionComponent', () => {
  let component: AgregarAvionComponent;
  let fixture: ComponentFixture<AgregarAvionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAvionComponent]
    });
    fixture = TestBed.createComponent(AgregarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
