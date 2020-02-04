import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentActionSheetPage } from './component-action-sheet.page';

describe('ComponentActionSheetPage', () => {
  let component: ComponentActionSheetPage;
  let fixture: ComponentFixture<ComponentActionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentActionSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
