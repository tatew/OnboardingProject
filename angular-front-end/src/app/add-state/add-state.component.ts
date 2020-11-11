import { Component, Directive, OnInit, ViewChild} from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { State, Option } from '../interfaces';
import {StatesCountriesService} from '../states-countries.service';

@Component({
    selector: 'app-add-state',
    templateUrl: './add-state.component.html',
    styleUrls: ['./add-state.component.css'],
})
export class AddStateComponent implements OnInit {
    @ViewChild(DropdownComponent) countryDropdown;
    newState: string;
    countries: Option[];
    selectedCountry: Option;
    constructor(private statesCountriesService : StatesCountriesService) { }

    ngOnInit(): void {
        this.getCountries();
    }

    getCountries(): void {
        this.statesCountriesService.getCountries()
            .subscribe(countries => this.countries = countries);
    }

    countryChange(opt : Option): void{
        this.selectedCountry = opt;
    }

    addState(): void {
        let stateFields = this.newState.split(",");
        stateFields = stateFields.map(e => e.trim());

        if (stateFields.length != 2 || stateFields[1].length != 2)
        {
            alert("ERROR: Please enter a State in the format: Name, two letter code");
            this.newState = "";
            return;
        }
        const state : State = {
            name: stateFields[0],
            code: stateFields[1],
            countryId: this.selectedCountry.id
        } 
        this.statesCountriesService.addState(state).subscribe(c => alert(`State ${c.name} was added successfully`));
        this.newState = "";
        this.selectedCountry = null;
        this.countryDropdown.reset();
    }

}
