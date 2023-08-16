import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavViewComponent } from './mobile-nav-view.component';

describe('MobileNavViewComponent', () => {
  let component: MobileNavViewComponent;
  let fixture: ComponentFixture<MobileNavViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
