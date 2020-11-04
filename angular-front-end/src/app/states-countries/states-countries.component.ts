import { Component, OnInit } from '@angular/core';

interface Country {
    id: number;
    code: string;
    name: string;
}

@Component({
    selector: 'app-states-countries',
    templateUrl: './states-countries.component.html',
    styleUrls: ['./states-countries.component.css']
})
export class StatesCountriesComponent implements OnInit {
    countries: Country[] = [
        {id: 1, code: "US", name: "United Sates"},
        {id: 2, code: "UK", name: "United Kingdom"}
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
