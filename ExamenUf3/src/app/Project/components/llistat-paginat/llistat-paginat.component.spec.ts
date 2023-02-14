import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistatPaginatComponent } from './llistat-paginat.component';

describe('LlistatPaginatComponent', () => {
  let component: LlistatPaginatComponent;
  let fixture: ComponentFixture<LlistatPaginatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistatPaginatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistatPaginatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
