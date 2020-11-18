import { Component, OnInit } from '@angular/core';
import {Country} from '../interfaces';
import { StatesCountriesService} from '../states-countries.service';

@Component({
    selector: 'app-add-country',
    templateUrl: './add-country.component.html',
    styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

    newCountry: string;
    constructor(private statesCountriesService : StatesCountriesService) { }

    ngOnInit(): void {
    }

    addCountry(): void {
        let countryFields = this.newCountry.split(",");
        countryFields = countryFields.map(e => e.trim());
        if (countryFields.length != 2 || countryFields[1].length != 2)
        {
            alert("ERROR: Please enter a country in the format: Name, two letter code");
            this.newCountry = "";
            return;
        }
        const country : Country = {
            id: 0,
            name: countryFields[0],
            code: countryFields[1]
        } 
        this.statesCountriesService.addCountry(country).subscribe(c => alert(`Country ${c.name} was added successfully`));
        this.newCountry = "";
    }

}
