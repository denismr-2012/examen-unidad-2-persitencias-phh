import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GestorDeCitasComponent } from './gestor-de-citas.component';

describe('GestorDeCitasComponent', () => {
  let component: GestorDeCitasComponent;
  let fixture: ComponentFixture<GestorDeCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GestorDeCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestorDeCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
