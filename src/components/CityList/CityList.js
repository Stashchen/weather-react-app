import React, { Component } from 'react';
import CityCard from './containers/CityCard';


export class CityList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.cities.map(city => 
                    <CityCard city={city}/>
                )}
            </div>
        )
    }
}

export default CityList
