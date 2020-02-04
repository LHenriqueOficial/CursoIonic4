import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentRangePage } from './component-range.page';

describe('ComponentRangePage', () => {
  let component: ComponentRangePage;
  let fixture: ComponentFixture<ComponentRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
