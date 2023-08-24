import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPilotosComponent } from './listar-pilotos.component';

describe('ListarPilotosComponent', () => {
  let component: ListarPilotosComponent;
  let fixture: ComponentFixture<ListarPilotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPilotosComponent]
    });
    fixture = TestBed.createComponent(ListarPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
