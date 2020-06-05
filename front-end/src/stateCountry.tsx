import React from 'react';
import Dropdown from './dropdown';

interface State {
    loadedCountries: boolean,
    loadedStates: boolean,
    loaded: boolean,
    countries: Option[],
    states: Option[],
}

interface Option {
    id: number,
    code: string,
    name: string
}

class StateCountry extends React.Component<{},State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            loadedCountries: false,
            loadedStates: false,
            loaded: false,
            countries: [{id: 0, code: '--', name:'Please choose a country'}],
            states: [{id: 0, code: '--', name:'Please choose a country'}]
        }

    }

    getWebData = (url: string, name: string) => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            result.sort((a: Option,b:Option) => a.name > b.name ? 1 : -1);
            if(name === 'country'){
                this.setState({
                    loaded: true,
                    loadedCountries: true,
                    countries: this.state.countries.concat(result)
                });
            } else {
                this.setState({
                    loaded: true,
                    loadedStates: true,
                    states: result
                });
            }
        }, error => {
            this.setState({
                loaded: true,
            });
            alert(error.message)
        });
    }

    componentDidMount() {
        this.getWebData('/api/countries/', 'country')
    }

    loadStates = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        if(code != '--') {
            const url = '/api/countries/' + code + '/states/'
            this.getWebData(url, 'state')
        } else {
            this.setState({
                states: [{id: 0, code: '--', name:'Please choose a country'}]
            });
        }
    }

    render() {
        return (
            <div>
                <Dropdown contents={this.state.countries} name="country" value='code' onChange={this.loadStates}/>
                <Dropdown contents={this.state.states} name="state" value='code' />
            </div>
        );
    }
}

export default StateCountry;

