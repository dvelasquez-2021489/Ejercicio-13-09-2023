import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditIndividualComponent } from './audit-individual.component';

describe('AuditIndividualComponent', () => {
  let component: AuditIndividualComponent;
  let fixture: ComponentFixture<AuditIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditIndividualComponent]
    });
    fixture = TestBed.createComponent(AuditIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
