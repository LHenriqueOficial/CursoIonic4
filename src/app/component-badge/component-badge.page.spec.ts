import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentBadgePage } from './component-badge.page';

describe('ComponentBadgePage', () => {
  let component: ComponentBadgePage;
  let fixture: ComponentFixture<ComponentBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentBadgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
