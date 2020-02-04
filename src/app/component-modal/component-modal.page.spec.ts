import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentModalPage } from './component-modal.page';

describe('ComponentModalPage', () => {
  let component: ComponentModalPage;
  let fixture: ComponentFixture<ComponentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
