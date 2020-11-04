import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesCountriesComponent } from './states-countries.component';

describe('StatesCountriesComponent', () => {
  let component: StatesCountriesComponent;
  let fixture: ComponentFixture<StatesCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
