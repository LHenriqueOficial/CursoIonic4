import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentModalInternoPage } from './component-modal-interno.page';

describe('ComponentModalInternoPage', () => {
  let component: ComponentModalInternoPage;
  let fixture: ComponentFixture<ComponentModalInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModalInternoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentModalInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
