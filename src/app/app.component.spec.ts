import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HackerStoryServiceService } from './Service/hacker-story-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { observable, of } from 'rxjs';
//import { eventNames } from 'node:process';


describe('AppComponent', () => {
  let service : HackerStoryServiceService;
  let mockSkillAddService = jasmine.createSpyObj<HackerStoryServiceService>('HackerStoryServiceService', ['getStoryListPageWise']);
  mockSkillAddService.getStoryListPageWise.and.stub;
  class MockData {
    public filter = 'testfilter';
   
  
   }
   let ELEMENTS: Element[];
 
   
   class paginator  {
   public firstPage(){
      ()=>{'test function'}
    }
      }
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,BrowserModule,MatInputModule,MatPaginatorModule,MatChipsModule,BrowserAnimationsModule,
        NoopAnimationsModule,MatProgressSpinnerModule
      ],
      providers:[{provider: HackerStoryServiceService, useValue : mockSkillAddService}, paginator  ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  beforeEach(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let x :any;
    app.ELEMENTS = x;
    app.datasource=MockData;
    app.datasource.paginator = paginator;
    app.datasource.sort = true;
    app.isLoading=false;
    fixture.detectChanges();

  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should create the component', fakeAsync(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    tick(20000)
    fixture.detectChanges();
    fixture.whenStable().then(()=>{

        expect(app).toBeTruthy();
  
      })

}));
// it('call service method in oninit',fakeAsync(()=>{
//   const fixture = TestBed.createComponent(AppComponent);
//  const app = fixture.componentInstance;
//  //spyOn(mockSkillAddService, 'getStoryListPageWise').and.stub();
//  tick();
// fixture.detectChanges();

// app.ngOnInit();
// expect(mockSkillAddService.getStoryListPageWise).toBeDefined();
// }));
it(`should have as service call  'getStoryListPageWise'`, fakeAsync(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  let ELEMENTS: Element[]=[];
  let ser = fixture.debugElement.injector.get(HackerStoryServiceService);
  spyOn(ser,'getStoryListPageWise').and.callFake(()=>{
   return of([]) 
  });
  //tick(300);
  //fixture.detectChanges();
  app.isLoading=false;
  app.ngOnInit();
  jasmine.clock().tick(5000);
  //tick(500)
  tick();
  expect(ser.getStoryListPageWise).toHaveBeenCalledWith();

  expect(app.title).toEqual('Hacker Story');
}));

  it(`should have as title 'AngProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Hacker Story');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hacker Story');
  });
  xit('should close the chatbox', function () {
   // const input = el.query(By.css('input')).nativeElement;
   // input.value = 'NewHero';
  
  
  let ELEMENTS: Element[]=[];
    let mockConversation:any =
    'sample';
    let datasource = MockData; //new MatTableDataSource<Element>( ELEMENTS);
    //app.openConversations = [mockConversation];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  
    app.datasource =  datasource;
app.datasource.filter = mockConversation;
//spyOn(app.datasource.paginator, 'firstPage').and.stub;
app.datasource.paginator = paginator;
//spyOn(datasource.paginator,'firstPage()').and.returnValues();
  //   var Ele: {
  //     new (): Element;
  //     prototype: Element;
  // }
    fixture.detectChanges();
        fixture.whenStable().then(()=> {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#filterId');
      element.value = 'sample';
      element.dispatchEvent(new Event('input'));
     
      expect(app.label).toEqual('sample');
      expect(app.applyFilter).toHaveBeenCalled();

    //   //element.onkeyup;
   
  })
  spyOn(app.datasource.paginator,"firstPage").and.callThrough();
  app.applyFilter(mockConversation);  
    //  app.applyFilter('sample');  
    // expect(app.label).toEqual('sample');
    //app.datasource.filter =  app.label.trim().toLocaleLowerCase()
  //    fixture.whenStable().then(()=> {
  //     const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#filterId');
  //     element.value = 'sample';
  //     element.dispatchEvent(new Event('input'));
  //     app.applyFilter( element.value);  
  //     expect(app.label).toEqual('sample');
  //   //   //element.onkeyup;
   
  // })

  expect(app.label).toEqual('sample');
    //app.datasource.filter = app.label.trim().toLocaleLowerCase();
   
 
   // expect(app.datasource.filter).toEqual(app.label.trim().toLocaleLowerCase());
   
  });
  // it('should set email model through ngModel', async() => {
   
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   let mockConversation:any =
  //   'sample';
  //   class MockData{
  //     filter = 'testfilter';
      
  
  //    }
  //     class paginator extends MockData  {
  //    static firstPage(){
  //       ()=>{'test function'}
  //     }
  //       }
  //       var mockData2= {
  //          filter : 'testfilter',
  //          firstPage(){

  //          }
  //       }
  //   await fixture.whenStable();

  //   fixture.detectChanges();
  //   const emailInputElement = fixture.debugElement.nativeElement.querySelector('#filterId');
  //   emailInputElement.value = mockConversation;
  //   emailInputElement.dispatchEvent(new Event('input'));
  //   app.datasource = MockData;
  //   app.datasource.paginator = true;
  //   spyOn(app.datasource.paginator,"firstPage").and.stub();
  //   fixture.detectChanges();
   
   
  //   app.applyFilter(mockConversation);  
  //   expect(app.label).toEqual('sample');
  // });
  // it('should call applyFilter', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
  //   app.getdata();
  //   //app.applyFilter.apply.prototype();
  //   expect(app.getdata()).toHaveBeenCalled();
  //  // expect(app.applyFilter).toHaveBeenCalled();
  //   expect(app.label).toEqual('sample');
  //  // app.applyFilter.spyOn('')
  //   // fixture.whenStable().then(()=> {
  //   //   const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#filterId');
  //   //   element.value = 'sample';
  //   //   element.dispatchEvent(new Event('input'));
  //   //   expect(app.label).toEqual('sample');
  //   //   //element.onkeyup;
  //   // })
  // });
  it('should call applyFilter1', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
   
    const app = fixture.componentInstance;
   let param :any = 'sample';
        let mockdatsource = { filter : param, paginator: { firstPage:()=>({}) } };
    app.datasource = mockdatsource;
    //  app.datasource.filter=mockdatsource.filter;
    //  app.datasource.paginator = mockdatsource.paginator;
     app.datasource.paginator.firstPage.stub;
     //jasmine.createSpyObj(app.datasource.paginator, "firstPage");
    // spyOn(app.datasource.paginator,"firstPage").and.stub();
    //const spyShowMessage = spyOn(app,"applyFilter");
    jasmine.clock().tick(5000);
    fixture.detectChanges();
    
    app.applyFilter(param); 
    //app.uploadTemplate();
    expect(app.datasource.filter).toEqual('');
    expect(app.applyFilter).toBeDefined();
    //expect(app.applyFilter).toBeDefined();
    
  //  expect(app.applyFilter).toHaveBeenCalled();
   // app.applyFilter.spyOn('')
   //expect(app.label).toEqual('sample');
   //app.applyFilter.bind('sample');
    // fixture.whenStable().then(()=> {
    //   const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#filterId');
    //   element.value = 'sample';
    //   element.dispatchEvent(new Event('input'));
    //   expect(app.label).toEqual('sample');
      //element.onkeyup;
      
    }));
  //});
  // it('should', fakeAsync(() => {
  //   spyOn(AppComponent, 'applyFilter');
  //   const fixture = TestBed.createComponent(AppComponent);
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  //   tick();
  //   expect(fixture.button).toHaveBeenCalled();
  
  // }));
});
