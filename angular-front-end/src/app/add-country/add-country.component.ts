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
        const countryFields = this.newCountry.split(",");
        countryFields.forEach(e => e.trim);
        if (countryFields.length != 2)
        {
            alert("ERROR");
            this.newCountry = "";
            return;
        }
        const country : Country = {
            name: countryFields[0],
            code: countryFields[1]
        } 
        this.statesCountriesService.addCountry(country).subscribe(c => alert(`Country ${c.name} was added successfully`));
        this.newCountry = "";
    }

}
