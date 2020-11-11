export interface Option {
    id: number;
    code: string;
    name: string;
}

export interface Country {
    code: string;
    name: string;
}

export interface State {
    code: string;
    name: string;
    countryId: number;
}