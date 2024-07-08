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
  
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,BrowserModule,MatInputModule,MatPaginatorModule,MatChipsModule,BrowserAnimationsModule,
        NoopAnimationsModule,MatProgressSpinnerModule
      ],
      providers:[{provider: HackerStoryServiceService, useValue : mockSkillAddService}  ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

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
it(`should have as service call  'getStoryListPageWise'`, fakeAsync(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  let ELEMENTS: Element[]=[];
  let ser = fixture.debugElement.injector.get(HackerStoryServiceService);
  spyOn(ser,'getStoryListPageWise').and.callFake(()=>{
   return of([]) 
  });

  app.isLoading=false;
  app.ngOnInit();
  jasmine.clock().tick(5000);
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
  it('should call applyFilter1', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
   
    const app = fixture.componentInstance;
   let param :any = 'sample';
        let mockdatsource = { filter : param, paginator: { firstPage:()=>({}) } };
    app.datasource = mockdatsource;
    app.datasource.paginator.firstPage.stub;
    jasmine.clock().tick(5000);
    fixture.detectChanges();
    
    app.applyFilter(param); 
    //app.uploadTemplate();
    expect(app.datasource.filter).toEqual('');
    expect(app.applyFilter).toBeDefined();    
    }));
});
