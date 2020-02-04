import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutHeaderFooterPage } from './layout-header-footer.page';

describe('LayoutHeaderFooterPage', () => {
  let component: LayoutHeaderFooterPage;
  let fixture: ComponentFixture<LayoutHeaderFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHeaderFooterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutHeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
