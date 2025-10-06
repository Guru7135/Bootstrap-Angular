import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveClientComponent } from './archive-client.component';

describe('ArchiveClientComponent', () => {
  let component: ArchiveClientComponent;
  let fixture: ComponentFixture<ArchiveClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
