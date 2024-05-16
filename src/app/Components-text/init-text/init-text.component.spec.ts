import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitTextComponent } from './init-text.component';

describe('InitTextComponent', () => {
  let component: InitTextComponent;
  let fixture: ComponentFixture<InitTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
