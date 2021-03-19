/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ExtraInfo, StyledButton, StyledRange, Row } from './styles';

const Question3 = ({ register, onNext }) => (
    <ExtraInfo>
        <h3>What approach to travelling do you take?</h3>
        <Row between>
            <small>I plan ahead</small>
            <small>I go with the flow</small>
        </Row>
        <StyledRange type="range" id="travelApproach" name="travelApproach" min="0" max="10" ref={register} />
        <StyledButton type="button" onClick={() => onNext(4)}>
            Next
        </StyledButton>
    </ExtraInfo>
);

export default Question3;
