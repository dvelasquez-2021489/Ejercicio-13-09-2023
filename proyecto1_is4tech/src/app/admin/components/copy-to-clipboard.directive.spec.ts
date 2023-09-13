import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive';
import { ElementRef } from '@angular/core';

describe('CopyToClipboardDirective', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CopyToClipboardDirective],
      providers: [
        {
          provide: ElementRef,
          useValue: {} // Proporciona una instancia simulada de ElementRef
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyToClipboardDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.componentInstance;
    expect(directive).toBeTruthy();
  });
});

