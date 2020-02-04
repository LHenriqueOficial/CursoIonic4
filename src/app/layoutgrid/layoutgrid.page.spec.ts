import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LayoutgridPage } from './layoutgrid.page';

describe('LayoutgridPage', () => {
  let component: LayoutgridPage;
  let fixture: ComponentFixture<LayoutgridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutgridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutgridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
