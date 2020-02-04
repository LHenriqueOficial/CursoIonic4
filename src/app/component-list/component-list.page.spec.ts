import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentListPage } from './component-list.page';

describe('ComponentListPage', () => {
  let component: ComponentListPage;
  let fixture: ComponentFixture<ComponentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
