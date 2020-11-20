import { Injectable } from '@angular/core';
import { Option, Country, StoreState, State } from './interfaces';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { ObservableStore } from '@codewithdan/observable-store';
import { userInfo } from 'os';

@Injectable({
    providedIn: 'root'
})
export class StatesCountriesService extends ObservableStore<StoreState> {

    constructor(private http: HttpClient) { 
        super({});
        const initalState : StoreState = {
            countries: [],
            states: []
        };
        this.setState(initalState, 'INIT_STATE');
    }

    getCountries() {
        const countries = this.getState().countries;
        if (countries.length == 0) {
            const countriesObservable = this.http.get<Option[]>("/api/countries").pipe(
                catchError(this.handleError<any>('Get Countries'))
            );
            countriesObservable.subscribe(countries => {
                this.setState({countries: countries}, 'SET_COUNTRIES')
            });
        }
    }

    getStates(countryCode: string) {
        const statesObservable = this.http.get<Option[]>(`/api/countries/${countryCode}/states/`).pipe(
            catchError(this.handleError<any>('Get States'))
        );
        statesObservable.subscribe(states => {
            this.setState({states: states}, 'SET_STATES')
        })
    }

    addCountry(country: Country) : Observable<Country>{
        const user = sessionStorage.getItem('user');
        const userData = JSON.parse(user);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userData.token })
        };
        return this.http.post<Country>("/api/countries/", country, httpOptions).pipe(
            tap(country => {
                let state = this.getState();
                state.countries.push(country);
                this.setState({countries: state.countries}, 'ADD_COUNTRY');
            }),
            catchError(this.handleError<any>('Add Country'))
        );
    }

    addState(state: State): Observable<State> {
        const user = sessionStorage.getItem('user');
        const userData = JSON.parse(user);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userData.token })
        };
        return this.http.post<State>("/api/states/", state, httpOptions).pipe(
            tap(state => {
                let appState = this.getState();
                appState.states.push(state);
                this.setState({states: appState.states}, 'ADD_STATE');
            }),
            catchError(this.handleError<any>('Add State'))
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
