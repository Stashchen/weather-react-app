import React, { Component } from 'react';
import styled from 'styled-components';

import CityCard from './containers/CityCard';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


export class CityList extends Component {

    render() {
        return (
            <List>
                {this.props.cities.map(city => 
                    <CityCard city={city}/>
                )}
            </List>
        )
    }
}

export default CityList
