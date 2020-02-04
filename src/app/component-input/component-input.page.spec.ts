import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentInputPage } from './component-input.page';

describe('ComponentInputPage', () => {
  let component: ComponentInputPage;
  let fixture: ComponentFixture<ComponentInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
