import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPilotoComponent } from './editar-piloto.component';

describe('EditarPilotoComponent', () => {
  let component: EditarPilotoComponent;
  let fixture: ComponentFixture<EditarPilotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPilotoComponent]
    });
    fixture = TestBed.createComponent(EditarPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
