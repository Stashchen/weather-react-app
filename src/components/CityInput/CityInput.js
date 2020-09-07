import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../Loader/Loader';
import CityList from '../CityList/CityList';


const CustomForm = styled.div`
    text-align: center;
    margin: auto;
    vertical-align: middle;
`;

const FormInput = styled.input`
    width: 50%;
    font-size: 36px;
    padding: 20px;
    border-radius: 5em 0 0 5em;
    border: 1px solid #ccc;
`;

const FormButton = styled.button`
    font-size: 36px;
    padding: 20px;
    border-radius: 0 5em 5em 0;
    border: 1px solid #ccc;
    margin-bottom: 20px;
`;

export class CityInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            searchValue: '',
            isTyping: false,
        };
        this.inputValue = React.createRef();
    }

    handleSubmit(e) {
        this.setState({ loading: true });

        let newCityPromises = [];

        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.inputValue.current.value}`, {
            'Access-Control-Allow-Origin': '*'
        })
            .then(response => response.json())
            .catch(error => console.log(error.message))
            .then(cities => {
                cities.forEach(city => {
                    const promise = fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${city.woeid}/`, {
                        'Access-Control-Allow-Origin': '*'
                    })
                        .then(response => response.json())
                        .catch(error => console.log(error.message))

                    newCityPromises.push(promise)
                });

                Promise.all(newCityPromises)
                .then((data) => {
                    this.setState({ cities: data, loading: false })
                })
            });

        

        e.preventDefault();
    }

    render() {

        const { loading, cities } = this.state;

        return (
            <CustomForm>
                <form onSubmit={(e) => this.handleSubmit(e) }>
                    <FormInput placeholder='Search...' ref={ this.inputValue } />
                    <FormButton className='btn btn-warning'>Search</FormButton>
                    { loading ? <Loader /> : ( cities ? <CityList cities={cities}/> : <h1>No cities found.</h1> )}
                </form>
            </CustomForm>
        )
    }
}

export default CityInput
