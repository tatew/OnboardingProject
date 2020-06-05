import React from 'react';
import './dropdown.css';

interface State{}

interface Props {
    name: string,
    contents: Option[],
    value: string,
    onChange?: Function
}

interface Option {
    id: number,
    code: string,
    name: string
}

class Dropdown extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
    };


    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(this.props.onChange != null){
            this.props.onChange(e);
        }
    }

    makeItem = (option:Option) => {
        if (this.props.value == 'id') {
            return <option key={option.id} value={option.id}>{option.name}</option>
        } else {
            return <option key={option.id} value={option.code}>{option.name}</option>
        }
    }

    render() {
        return (
            <div className="dropdown">
                <label htmlFor="input">Choose a {this.props.name}: </label>
                <select name="input" onChange={this.handleChange}>
                    {this.props.contents.map(this.makeItem)}
                </select>
            </div>
        );
    }
}

export default Dropdown;