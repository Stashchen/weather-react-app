import React, { Component } from 'react'
import styled from 'styled-components';
import CityInput from '../CityInput/CityInput';


const HeadH1 = styled.h1`
    width: 25%;
    margin: 25px auto;
    padding: 15px;
    text-align: center;
    border: 1px solid black;
    border-radius: 1em;
`;

export class App extends Component {

    constructor() {
        super();
        this.state = {
            city: []
        }
    }

    render() {
        return (
            <div>
                <HeadH1>Weather App</HeadH1>
                <CityInput />
            </div>
        )
    }
}

export default App
