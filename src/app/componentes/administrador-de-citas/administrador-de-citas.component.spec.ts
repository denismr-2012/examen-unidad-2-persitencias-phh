import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdministradorDeCitasComponent } from './administrador-de-citas.component';

describe('AdministradorDeCitasComponent', () => {
  let component: AdministradorDeCitasComponent;
  let fixture: ComponentFixture<AdministradorDeCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AdministradorDeCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradorDeCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
