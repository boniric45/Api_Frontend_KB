import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKbComponent } from './admin-kb.component';

describe('AdminKbComponent', () => {
  let component: AdminKbComponent;
  let fixture: ComponentFixture<AdminKbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminKbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminKbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
