import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';
import { AddStateComponent } from './add-state/add-state.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StatesCountriesComponent } from './states-countries/states-countries.component';

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: StatesCountriesComponent},
    {path: 'addCountry', component: AddCountryComponent},
    {path: 'addState', component: AddStateComponent},
    {path: 'counter', component: MyCounterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
