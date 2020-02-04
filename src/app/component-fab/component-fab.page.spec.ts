import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentFabPage } from './component-fab.page';

describe('ComponentFabPage', () => {
  let component: ComponentFabPage;
  let fixture: ComponentFixture<ComponentFabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
