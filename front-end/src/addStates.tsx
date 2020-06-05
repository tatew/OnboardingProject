import React from 'react';
import Dropdown from './dropdown';
import UpdateServer from './updateServer';

interface Option {
    id: number,
    code: string,
    name: string
}

interface Props {

}

interface State {
    countries: Option[]
    loaded: boolean
    selectedCountry: string
}

class AddStates extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state ={
            countries: [],
            loaded: false,
            selectedCountry: '1'
        }
    }

    handleChange = (e: any) => {
        this.setState({selectedCountry: e.target.value})
    }

    getWebData = (url: string) => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            result.sort((a: Option,b:Option) => a.name > b.name ? 1 : -1);
            this.setState({
                loaded: true,
                countries: this.state.countries.concat(result)
            });
        }, error => {
            this.setState({
                loaded: true,
            });
            alert(error.message)
        });
    }

    componentDidMount = () => {
        this.getWebData('/api/countries/')
    }   

    render(){
        return (
            <div>
                <UpdateServer name="State" selectedCountry={this.state.selectedCountry}/>
                <Dropdown name="country" contents={this.state.countries} value='id' onChange={this.handleChange}/>
            </div>
        );
    }
}

export default AddStates;