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
    selected: string;
    constructor(private statesCountriesService : StatesCountriesService) { }

    ngOnInit(): void {
       this.getCountries();
       this.getStates();
    }

    getCountries(): void {
        this.statesCountriesService.getCountries()
            .subscribe(countries => this.countries = countries);
    }

    getStates(): void {
        this.statesCountriesService.getStates("US")
            .subscribe(states => this.states = states);
    }

    countryChange(opt: Option): void {
        this.selected = opt.code;
    }
}
