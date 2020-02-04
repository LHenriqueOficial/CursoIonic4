import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentCheckBoxPage } from './component-check-box.page';

describe('ComponentCheckBoxPage', () => {
  let component: ComponentCheckBoxPage;
  let fixture: ComponentFixture<ComponentCheckBoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCheckBoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCheckBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
