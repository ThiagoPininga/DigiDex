import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonListaComponent } from './digimon-lista.component';

describe('DigimonListaComponent', () => {
  let component: DigimonListaComponent;
  let fixture: ComponentFixture<DigimonListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigimonListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigimonListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
