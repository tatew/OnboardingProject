import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { StatesCountriesComponent } from './states-countries/states-countries.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { AddStateComponent } from './add-state/add-state.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
    declarations: [
        AppComponent,
        StatesCountriesComponent,
        DropdownComponent,
        AddCountryComponent,
        AddStateComponent,
        MyCounterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        StoreModule.forRoot({count: counterReducer}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
