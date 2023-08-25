import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSessionComponent } from './inicio-session.component';

describe('InicioSessionComponent', () => {
  let component: InicioSessionComponent;
  let fixture: ComponentFixture<InicioSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSessionComponent]
    });
    fixture = TestBed.createComponent(InicioSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
