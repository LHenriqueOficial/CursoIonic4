import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentButtonPage } from './component-button.page';

describe('ComponentButtonPage', () => {
  let component: ComponentButtonPage;
  let fixture: ComponentFixture<ComponentButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
