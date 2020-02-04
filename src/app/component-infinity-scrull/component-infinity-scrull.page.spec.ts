import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentInfinityScrullPage } from './component-infinity-scrull.page';

describe('ComponentInfinityScrullPage', () => {
  let component: ComponentInfinityScrullPage;
  let fixture: ComponentFixture<ComponentInfinityScrullPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInfinityScrullPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInfinityScrullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
