/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ExtraInfo, StyledButton, StyledRange, Row } from './styles';

const Question4 = ({ register, onNext }) => (
    <ExtraInfo>
        <h3>How would you describe yourself?</h3>
        <Row between>
            <small>Introvert</small>
            <small>Extrovert</small>
        </Row>
        <StyledRange type="range" id="describeYourself" name="describeYourself" min="0" max="10" ref={register} />
        <StyledButton type="button" onClick={() => onNext(5)}>
            Next
        </StyledButton>
    </ExtraInfo>
);

export default Question4;
