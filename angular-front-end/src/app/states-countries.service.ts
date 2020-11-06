import { Injectable } from '@angular/core';
import { Option } from './interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StatesCountriesService {

    constructor(private http: HttpClient) { }

    getCountries(): Observable<Option[]> {
        return this.http.get<Option[]>("/api/countries");
    }

    getStates(countryCode : string) : Observable<Option[]> {
        return this.http.get<Option[]>(`/api/countries/${countryCode}/states/`);
    }
}
