import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistatTitolArtistaComponent } from './llistat-titol-artista.component';

describe('LlistatTitolArtistaComponent', () => {
  let component: LlistatTitolArtistaComponent;
  let fixture: ComponentFixture<LlistatTitolArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistatTitolArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistatTitolArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
