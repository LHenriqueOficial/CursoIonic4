import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentLoadingPage } from './component-loading.page';

describe('ComponentLoadingPage', () => {
  let component: ComponentLoadingPage;
  let fixture: ComponentFixture<ComponentLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLoadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
