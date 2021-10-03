import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavestockComponent } from './savestock.component';

describe('SavestockComponent', () => {
  let component: SavestockComponent;
  let fixture: ComponentFixture<SavestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
