import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface SpaceXDataRequest {
  limit?: number;
  launch_success?: boolean;
  land_success?: boolean;
  launch_year?: number;
}

export interface SpaceXDataResponse {
  flight_number: number;
  mission_name: string;
  mission_id: Array<string>;
  launch_year: string;
  launch_success: boolean;
  links: Links;
  rocket: {
    first_stage: {
      cores: Array<any>;
    }
  };
}

export interface Links {
  mission_patch_small: string;
}

@Injectable({
  providedIn: 'root'
})

export class SpaceXDataService {
  private basePath = 'https://api.spacexdata.com/v3';
  constructor(private httpClient: HttpClient) { }

  getSpaceXData(params: SpaceXDataRequest) {
    let headers = new HttpHeaders();

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'application/json'
    ];
    headers = headers.set('Accept', httpHeaderAccepts);

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json'
    ];

    let httpParams = new HttpParams();
    if (params.limit) {
      httpParams = httpParams.set('limit', String(params?.limit));
    }
    if ('launch_success' in params) {
      httpParams = httpParams.set('launch_success', String(params?.launch_success));
    }
    if ('land_success' in params) {
      httpParams = httpParams.set('land_success', String(params?.land_success));
    }
    if (params.launch_year) {
      httpParams = httpParams.set('launch_year', String(params?.launch_year));
    }

    headers = headers.set('Content-Type', consumes);

    return this.httpClient.request<Array<SpaceXDataResponse>>('get', `${this.basePath}/launches`,
      {
        headers,
        params: httpParams
      }
    );
  }
}
