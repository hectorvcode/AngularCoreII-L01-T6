import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http: HttpClient) { }

  public getCountries(): Observable<any[]> {
    return this._http.get<any[]>('https://us-central1-softlabs-30335.cloudfunctions.net/countries');
  }
}
