import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentPopoverInternoComponent } from './component-popover-interno.component';

describe('ComponentPopoverInternoComponent', () => {
  let component: ComponentPopoverInternoComponent;
  let fixture: ComponentFixture<ComponentPopoverInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPopoverInternoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPopoverInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
