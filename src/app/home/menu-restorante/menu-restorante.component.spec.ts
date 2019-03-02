import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestoranteComponent } from './menu-restorante.component';

describe('MenuRestoranteComponent', () => {
  let component: MenuRestoranteComponent;
  let fixture: ComponentFixture<MenuRestoranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRestoranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRestoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
