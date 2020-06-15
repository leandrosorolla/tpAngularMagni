import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIntrumentoComponent } from './item-intrumento.component';

describe('ItemIntrumentoComponent', () => {
  let component: ItemIntrumentoComponent;
  let fixture: ComponentFixture<ItemIntrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemIntrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIntrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
