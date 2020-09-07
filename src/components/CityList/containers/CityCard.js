import React, { Component } from 'react';
import styled from 'styled-components';


const CardDiv = styled.div`
    width: 25%;
    margin: 10px;
    border-radius: 1em;
    border: 1px solid black;
`;


export default function CityCard(props) {
    return (
        <CardDiv>
            <h2>{props.city.title}, {props.city.parent.title}</h2>
        </CardDiv>
    )
}