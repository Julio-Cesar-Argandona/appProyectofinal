import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosRegistradosComponent } from './productos-registrados.component';

describe('ProductosRegistradosComponent', () => {
  let component: ProductosRegistradosComponent;
  let fixture: ComponentFixture<ProductosRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosRegistradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
