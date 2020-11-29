import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpaceXDataService, SpaceXDataRequest, SpaceXDataResponse } from 'src/app/services/space-x-data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-space-x-data',
  templateUrl: './space-x-data.component.html',
  styleUrls: ['./space-x-data.component.scss']
})
export class SpaceXDataComponent implements OnInit, OnDestroy {
  public spaceXList: Array<any>;
  public years: Array<number> = [];
  public booleanArr: Array<boolean>;
  public filters: SpaceXDataRequest;

  private endSubscriptions$ = new Subject<void>();
  constructor(private spaceXDataService: SpaceXDataService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.filters = { limit: 100 };
    this.booleanArr = [true, false];
    let yearStart = 2006;
    while (yearStart <= 2020) {
      this.years.push(yearStart);
      yearStart++;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      takeUntil(this.endSubscriptions$)
    ).subscribe((paramMap) => {
      this.filters = { limit: 100 };
      if (paramMap.land_success) {
        this.filters.land_success = paramMap.land_success === 'true' ? true : false;
      }
      if (paramMap.launch_success) {
        this.filters.launch_success = paramMap.launch_success === 'true' ? true : false;
      }
      if (paramMap.launch_year) {
        this.filters.launch_year = Number(paramMap.launch_year);
      }
      this.getSpaceXData();
    });
  }

  getSpaceXData() {
    this.spaceXDataService.getSpaceXData(this.filters).pipe(takeUntil(this.endSubscriptions$)).subscribe(
      (result: Array<SpaceXDataResponse>) => {
        this.spaceXList = result;
      }
    );
  }

  toggleFilter(value: number, key: string) {
    if (this.filters[key] !== value) {
      this.filters[key] = value;
    } else if (this.filters[key] || this.filters[key] === false) {
      delete this.filters[key];
    } else {
      this.filters[key] = value;
    }
    this.updateUrl();
  }

  updateUrl() {
    this.router.navigate([], {
      queryParams: this.filters,
      queryParamsHandling: null
    });
  }

  ngOnDestroy() {
    this.endSubscriptions$.next();
    this.endSubscriptions$.complete();
  }

}
