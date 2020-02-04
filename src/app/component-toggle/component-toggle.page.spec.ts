import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentTogglePage } from './component-toggle.page';

describe('ComponentTogglePage', () => {
  let component: ComponentTogglePage;
  let fixture: ComponentFixture<ComponentTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTogglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
