import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentSelectPage } from './component-select.page';

describe('ComponentSelectPage', () => {
  let component: ComponentSelectPage;
  let fixture: ComponentFixture<ComponentSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
