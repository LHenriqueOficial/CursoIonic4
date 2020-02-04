import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentRadioPage } from './component-radio.page';

describe('ComponentRadioPage', () => {
  let component: ComponentRadioPage;
  let fixture: ComponentFixture<ComponentRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRadioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
