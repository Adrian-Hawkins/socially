import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreShell } from './core.shell';

describe('CoreShell', () => {
  let component: CoreShell;
  let fixture: ComponentFixture<CoreShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CoreShell],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
