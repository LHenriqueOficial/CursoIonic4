import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentCalendarPage } from './component-calendar.page';

describe('ComponentCalendarPage', () => {
  let component: ComponentCalendarPage;
  let fixture: ComponentFixture<ComponentCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
