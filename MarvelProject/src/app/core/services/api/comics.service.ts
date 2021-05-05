import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { environment } from '../../../../environments/environment';

import md5 from 'js-md5';

@Injectable()
export class ComicsService {
  private path: string; 
  constructor(private apiService: ApiService, private http: HttpClient) {
    this.path = 'comics';
  }

  getComics(): Observable<any> { 
    const tsvalue = Number(new Date());
    const hash2 = md5.create();
    hash2.update(tsvalue + environment.private_key + environment.public_key);
    const params = {
      apikey: environment.public_key,
      ts: tsvalue.toString(),
      hash: hash2.toString(),
    };
    
    return this.apiService.get(
      this.path,
      new HttpParams({ fromObject: params })
    );
  }

  
}
