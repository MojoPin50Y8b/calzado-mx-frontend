import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeList } from './shoe-list';

describe('ShoeList', () => {
  let component: ShoeList;
  let fixture: ComponentFixture<ShoeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
