import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '@socially/app/components';
import { DocsPage } from './docs.page';

describe('DocsPage', () => {
  let component: DocsPage;
  let fixture: ComponentFixture<DocsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsPage],
      imports:[ComponentsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DocsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
