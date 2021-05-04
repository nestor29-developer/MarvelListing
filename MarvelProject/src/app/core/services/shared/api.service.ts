import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, map, startWith, timeout } from 'rxjs/operators';
import { Error } from '../../models/error.model';
import { HttpStatusConstants } from '../../../core/http-status.constants';
@Injectable()
export class ApiService {
  customError: Error;
  private full_api_url: string;
  constructor(private http: HttpClient) {
    this.full_api_url = environment.api_url + environment.version;
  }

  private formatErrors(error: any) { 
    this.customError = {
      status: error.status,
      statusText: error.statusText,
      message: error.error.message,
    };

    switch (error.status) {
      case HttpStatusConstants.NOT_FOUND:
        this.customError.message = '';
        break;

      case HttpStatusConstants.INTERNAL_SERVER_ERROR:
        this.customError.message = 'Try it in a few minutes';
        break;

      case HttpStatusConstants.GATEWAY_TIMEOUT:
        this.customError.message = 'Try again, please';
        break;

      default:
        break;
    }
    return throwError(this.customError);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> { 
    return this.http
      .get(`${this.full_api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.full_api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${this.full_api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${this.full_api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http
      .patch(`${this.full_api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }
}
