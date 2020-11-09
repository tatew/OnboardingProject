import { Component, OnInit } from '@angular/core';
import { Option } from '../interfaces';
import {StatesCountriesService} from '../states-countries.service';

@Component({
    selector: 'app-states-countries',
    templateUrl: './states-countries.component.html',
    styleUrls: ['./states-countries.component.css']
})
export class StatesCountriesComponent implements OnInit {
    countries: Option[];
    states: Option[];
    selectedCountry: Option;
    selectedState: Option;
    constructor(private statesCountriesService : StatesCountriesService) { }

    ngOnInit(): void {
       this.getCountries();
    }

    getCountries(): void {
        this.statesCountriesService.getCountries()
            .subscribe(countries => this.countries = countries);
    }

    getStates(code: string): void {
        this.statesCountriesService.getStates(code)
            .subscribe(states => this.states = states);
    }

    countryChange(opt: Option): void {
        this.selectedCountry = opt;
        this.getStates(opt.code);
        this.selectedState = null;
    }

    stateChange(opt: Option): void {
        this.selectedState = opt;
    }
}
