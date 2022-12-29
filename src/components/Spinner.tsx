import React, { ReactElement } from 'react';
import spinner from '../assets/images/spinner.svg';
import styled from 'styled-components';

export const Spinner = (): ReactElement => {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
