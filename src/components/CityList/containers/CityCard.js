import React from 'react';
import styled from 'styled-components';


const CardDiv = styled.div`
    margin: 10px;
    flex: 0 0 30%;
    padding: 20px;
    border-radius: 1em;
    border: 1px solid black;
    font-size: 25px;
`;

const WeatherImg = styled.img`
    width: 100px;
    height: 100px;
`;

const Temperature = styled.p`
    font-weight: bold;
`;

const SideTemperature = styled.div`
    display: flex;
    justify-content: space-between;
`;


export default function CityCard(props) {
    const currentDay = props.city.consolidated_weather[0];
    return (
        <CardDiv>
            <h2>{props.city.title}, {props.city.parent.title}</h2>
            <WeatherImg src={`https://www.metaweather.com/static/img/weather/${currentDay.weather_state_abbr}.svg`} />
            <div>
                <Temperature>{Number.parseFloat(currentDay.the_temp).toFixed(1)}&deg;</Temperature>
                <SideTemperature>
                    <Temperature>min: {Number.parseFloat(currentDay.min_temp).toFixed(1)}&deg;</Temperature>
                    <Temperature>max: {Number.parseFloat(currentDay.max_temp).toFixed(1)}&deg;</Temperature>
                </SideTemperature>
            </div>
        </CardDiv>
    )
}