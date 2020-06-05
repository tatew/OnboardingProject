import React from 'react';

interface State {
    newCountry: string,
}

interface Props {
    name: string;
    onSubmit: Function
}

class AddCountries extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {newCountry: ''}
    }

    handleSubmit = (e: any) => {
        this.props.onSubmit(this.state.newCountry);
        this.setState({newCountry: ''});
    }

    textChange = (e: any) => {
        this.setState({
            newCountry: e.target.value
        },() => {console.log(this.state.newCountry)});
    }

    render() {
        return (
            <div>
                <h2>Add {this.props.name == 'Country' ? 'Country': 'State'}</h2>
                <p>Enter a {this.props.name} in the following format:</p>
                <p>Name, {this.props.name} Code</p>
                <input id="new" onChange={this.textChange} value={this.state.newCountry} placeholder="United Kingdom, UK"></input>
                <button onClick={this.handleSubmit}>Add!</button>
            </div>
        );
    }
}

export default AddCountries;