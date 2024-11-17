import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerEjercicioComponent } from './primer-ejercicio.component';

describe('PrimerEjercicioComponent', () => {
  let component: PrimerEjercicioComponent;
  let fixture: ComponentFixture<PrimerEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerEjercicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
