import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeForm } from './shoe-form';

describe('ShoeForm', () => {
  let component: ShoeForm;
  let fixture: ComponentFixture<ShoeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
