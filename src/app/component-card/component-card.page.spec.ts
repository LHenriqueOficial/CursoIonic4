import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentCardPage } from './component-card.page';

describe('ComponentCardPage', () => {
  let component: ComponentCardPage;
  let fixture: ComponentFixture<ComponentCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
