import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoEjercicioComponent } from './segundo-ejercicio.component';

describe('SegundoEjercicioComponent', () => {
  let component: SegundoEjercicioComponent;
  let fixture: ComponentFixture<SegundoEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoEjercicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
