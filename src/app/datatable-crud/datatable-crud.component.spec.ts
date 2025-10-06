import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableCrudComponent } from './datatable-crud.component';

describe('DatatableCrudComponent', () => {
  let component: DatatableCrudComponent;
  let fixture: ComponentFixture<DatatableCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatatableCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
