export interface Option {
    id: number;
    code: string;
    name: string;
}

export interface Country {
    id: number;
    code: string;
    name: string;
}

export interface State {
    id: number;
    code: string;
    name: string;
    countryId: number;
}

export interface StoreState {
    countries: Country[];
    states: State[];
}