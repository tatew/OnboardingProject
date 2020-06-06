import React from 'react';
import { useFormik, Formik} from 'formik';

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

    countryForm  = () => 
    {
        const formik = useFormik({
            initialValues: {
                country: ''
            }, 
            onSubmit: values => {
                this.props.onSubmit(values.country);
            },
        });
        return (
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="country"
                    name="country"
                    type="text"
                    onChange={formik.handleChange}
                    placeholder="United States, US"
                    value={formik.values.country}
                />
                <button type="submit">Add!</button>
            </form>
        );
    }

    render() {
        return (
            <div>
                <h2>Add {this.props.name == 'Country' ? 'Country': 'State'}</h2>
                <p>Enter a {this.props.name} in the following format:</p>
                <p>Name, {this.props.name} Code</p>
                {/*<this.countryForm />*/}
                <input id="new" onChange={this.textChange} value={this.state.newCountry} placeholder="United Kingdom, UK"></input>
                <button onClick={this.handleSubmit}>Add!</button>
            </div>
        );
    }  
}



export default AddCountries;