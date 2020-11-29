import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXDataComponent } from './space-x-data.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SpaceXDataService } from 'src/app/services/space-x-data.service';
import { Router } from 'express';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { SpaceXCardComponent } from '../space-x-card/space-x-card.component';

describe('SpaceXDataComponent', () => {
  let component: SpaceXDataComponent;
  let fixture: ComponentFixture<SpaceXDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SpaceXDataComponent],
      providers: [HttpClient,
        HttpHandler,
        SpaceXDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.outer-container h1').textContent).toContain('SpaceX Launch Programs');
  });

  it('should render No data available when api call fails', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.no-data').textContent).toContain('No data available');
  });

});
