import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioCitasComponent } from './formulario-citas.component';

describe('FormularioCitasComponent', () => {
  let component: FormularioCitasComponent;
  let fixture: ComponentFixture<FormularioCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
