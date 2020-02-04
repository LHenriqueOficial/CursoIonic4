import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentPopoverPage } from './component-popover.page';

describe('ComponentPopoverPage', () => {
  let component: ComponentPopoverPage;
  let fixture: ComponentFixture<ComponentPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
