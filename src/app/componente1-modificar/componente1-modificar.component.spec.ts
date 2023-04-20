import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1ModificarComponent } from './componente1-modificar.component';

describe('Componente1ModificarComponent', () => {
  let component: Componente1ModificarComponent;
  let fixture: ComponentFixture<Componente1ModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1ModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1ModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
