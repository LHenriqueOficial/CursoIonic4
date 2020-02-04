import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentAlertPage } from './component-alert.page';

describe('ComponentAlertPage', () => {
  let component: ComponentAlertPage;
  let fixture: ComponentFixture<ComponentAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAlertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
