import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComponent } from './creacion.component';

describe('CreacionComponent', () => {
  let component: CreacionComponent;
  let fixture: ComponentFixture<CreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
