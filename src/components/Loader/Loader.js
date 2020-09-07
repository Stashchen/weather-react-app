import React, { Component } from 'react';
import styled from 'styled-components';

const CustomLoader = styled.div`
    display: block;
    margin: 50px auto;
    width: 125px;
    height: 125px;
    font-size: 25px;
`;


export class Loader extends Component {
    render() {
        return (
            <CustomLoader className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </CustomLoader>
        )
    }
}

export default Loader
