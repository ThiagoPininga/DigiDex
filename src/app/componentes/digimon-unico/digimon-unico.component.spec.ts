import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonUnicoComponent } from './digimon-unico.component';

describe('DigimonUnicoComponent', () => {
  let component: DigimonUnicoComponent;
  let fixture: ComponentFixture<DigimonUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigimonUnicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
