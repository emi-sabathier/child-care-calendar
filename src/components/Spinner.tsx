import React from 'react';
import spinner from '../assets/images/spinner.svg';
import styled from 'styled-components';

export const Spinner = () => {
    return (
        <SpinnerContainer>
            <p>Chargement des données</p>
            <p>
                <img src={spinner} alt="Loading spinner" />
            </p>
        </SpinnerContainer>
    );
};

const SpinnerContainer = styled.div`
    justify-content: center;
    align-items: center;
`;
