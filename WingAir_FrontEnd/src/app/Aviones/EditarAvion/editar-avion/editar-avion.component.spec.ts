import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvionComponent } from './editar-avion.component';

describe('EditarAvionComponent', () => {
  let component: EditarAvionComponent;
  let fixture: ComponentFixture<EditarAvionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAvionComponent]
    });
    fixture = TestBed.createComponent(EditarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
