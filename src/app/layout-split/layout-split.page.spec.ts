import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutSplitPage } from './layout-split.page';

describe('LayoutSplitPage', () => {
  let component: LayoutSplitPage;
  let fixture: ComponentFixture<LayoutSplitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSplitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSplitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
