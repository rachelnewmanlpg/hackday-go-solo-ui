/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ExtraInfo, StyledButton, StyledRange, Row, StyledInput, StyledLabel, MainInfo } from './styles';

const Question5 = ({ register, onNext }) => (
    <ExtraInfo>
        <h3>Do you have a pass?</h3>
        <MainInfo>
            <StyledLabel>Link your pass to your profile</StyledLabel>
            <StyledInput
                placeholder="Order Number"
                name="orderNumber"
                type="text"
                register={register}
                id="orderNumber"
                showErrorMessage={false}
            />
            <StyledLabel row htmlFor="consent">
                <input type="radio" name="consent" id="consent" ref={register} value="yes" />
                <small>I am happy for my information to be shared and used to find travel companions </small>
            </StyledLabel>
            <StyledButton type="submit">Start exploring</StyledButton>
        </MainInfo>
    </ExtraInfo>
);

export default Question5;
