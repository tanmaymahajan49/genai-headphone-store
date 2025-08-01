import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductList } from './product-list';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products from backend', () => {
    const mockProducts = [
      { id: 1, name: 'Headphone A', description: 'Desc', price: 99, stock: 10 },
      { id: 2, name: 'Headphone B', description: 'Desc', price: 149, stock: 5 }
    ];
    const req = httpMock.expectOne('/api/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
    expect(component.products.length).toBe(2);
    expect(component.products[0].name).toBe('Headphone A');
    expect(component.products[1].name).toBe('Headphone B');
  });

  afterEach(() => {
    httpMock.verify();
  });
});
