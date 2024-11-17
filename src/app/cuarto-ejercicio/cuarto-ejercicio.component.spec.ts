import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoEjercicioComponent } from './cuarto-ejercicio.component';

describe('CuartoEjercicioComponent', () => {
  let component: CuartoEjercicioComponent;
  let fixture: ComponentFixture<CuartoEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuartoEjercicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
