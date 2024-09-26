import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysconpComponent } from './sysconp.component';

describe('SysconpComponent', () => {
  let component: SysconpComponent;
  let fixture: ComponentFixture<SysconpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SysconpComponent]
    });
    fixture = TestBed.createComponent(SysconpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
