import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(waitForAsync(() => {

     TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


   it("should have the 'proiectforestfront' title", () => {
     const fixture= TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app.title).toEqual('proiectforestfront');
   });

  it('should render the correct content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Hello, proiectforestfront'); // Adjust selector based on your template
  });
});
