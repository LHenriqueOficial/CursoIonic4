import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentRefresherPage } from './component-refresher.page';

describe('ComponentRefresherPage', () => {
  let component: ComponentRefresherPage;
  let fixture: ComponentFixture<ComponentRefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRefresherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
