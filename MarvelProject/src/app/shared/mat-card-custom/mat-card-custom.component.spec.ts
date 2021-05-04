import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardCustomComponent } from './mat-card-custom.component';

describe('MatCardCustomComponent', () => {
  let component: MatCardCustomComponent;
  let fixture: ComponentFixture<MatCardCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCardCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
