import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriasComponent } from './industrias.component';

describe('IndustriasComponent', () => {
  let component: IndustriasComponent;
  let fixture: ComponentFixture<IndustriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
