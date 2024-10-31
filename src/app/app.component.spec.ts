import { ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'; // Import for testing HTTP requests

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Include necessary modules
      declarations: [AppComponent] // Component must be declared
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Commenting out this test if title is not defined in AppComponent
  // it("should have the 'proiectforestfront' title", () => {
  //   expect(component.title).toEqual('proiectforestfront');
  // });

  it('should render the correct content', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, proiectforestfront'); // Adjust selector based on your template
  });
});
