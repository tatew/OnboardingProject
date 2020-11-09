import { Injectable } from '@angular/core';
import { Option, Country } from './interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { countReset } from 'console';
import { catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StatesCountriesService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }

    getCountries(): Observable<Option[]> {
        return this.http.get<Option[]>("/api/countries");
    }

    getStates(countryCode: string): Observable<Option[]> {
        return this.http.get<Option[]>(`/api/countries/${countryCode}/states/`);
    }

    addCountry(country: Country): Observable<Country> {
        return this.http.post<Country>("/api/countries/", country, this.httpOptions).pipe(
            catchError(this.handleError<any>('Add Country'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          alert(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}
