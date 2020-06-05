import React from 'react';
import AddItem from './addItem'

interface Props {
    name: string
    selectedCountry?: string
}

class UpdateServer extends React.Component<Props, {}> {
    constructor(props:Props) {
        super(props)
    }

    postData = (data: object, url: string) => {
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        }).catch((error)=> {
            console.log(error);
        });
    }

    handleSubmit = (newCountry: string) => {
        const newData = newCountry.split(', ');
        let toPost: object;
        let url: string;
        if (this.props.name == 'Country') {
            toPost = {code: newData[1], name: newData[0]};
            url = 'http://localhost:5000/api/countries/';
            this.postData(toPost, url);
        } else if(this.props.name == 'State' && this.props.selectedCountry != null) {
            toPost = {code: newData[1], name: newData[0], countryId: parseInt(this.props.selectedCountry)}
            url = 'http://localhost:5000/api/states/'
            this.postData(toPost, url);
        } else {
            alert('ya done goofed');
        }
    }

    render() {
        return (
            <AddItem name={this.props.name} onSubmit={this.handleSubmit}/>
        );
    }
}

export default UpdateServer;