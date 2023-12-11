import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonEvolComponent } from './digimon-evol.component';

describe('DigimonEvolComponent', () => {
  let component: DigimonEvolComponent;
  let fixture: ComponentFixture<DigimonEvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigimonEvolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonEvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
