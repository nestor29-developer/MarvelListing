import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularLoaderComponent } from './circular-loader.component';

describe('CircularLoaderComponent', () => {
  let component: CircularLoaderComponent;
  let fixture: ComponentFixture<CircularLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
