import { Component, OnInit } from '@angular/core';
import { Option } from '../interfaces';
import { StatesCountriesService } from '../states-countries.service';
import { Subscription } from 'rxjs';

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
    storeSub: Subscription;
    constructor(private statesCountriesService: StatesCountriesService) { }

    ngOnInit(): void {
        this.storeSub = this.statesCountriesService.stateChanged.subscribe(state => {
            if (state) {
                this.countries = state.countries.map(country => {
                    const opt: Option = {
                        id: country.id,
                        code: country.code,
                        name: country.name
                    }
                    return opt;
                });
                if (this.selectedCountry != null) {
                    this.states = state.states.map(state => {
                        const opt: Option = {
                            id: state.id,
                            code: state.code,
                            name: state.name
                        }
                        return opt;
                    })
                }
            }
        })
        this.statesCountriesService.getCountries();
    }

    getStates(code: string): void {
        this.statesCountriesService.getStates(code)
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
