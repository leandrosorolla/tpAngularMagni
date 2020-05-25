import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInstrumentoComponent } from './detalle-instrumento.component';

describe('DetalleInstrumentoComponent', () => {
  let component: DetalleInstrumentoComponent;
  let fixture: ComponentFixture<DetalleInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
