import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutCssUtilitiesPage } from './layout-css-utilities.page';

describe('LayoutCssUtilitiesPage', () => {
  let component: LayoutCssUtilitiesPage;
  let fixture: ComponentFixture<LayoutCssUtilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCssUtilitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutCssUtilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
