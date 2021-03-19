/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { ExtraInfo, StyledButton, StyledRadio, StyledLabel, Row } from './styles';
import interestList from './interests';

const Question2 = ({ register, onNext }) => {
    const [showNext, toggleNext] = useState(false);
    return (
        <ExtraInfo>
            <h3>What are your interests?</h3>
            <span>Select at least 3, the more you select the more accurate your match will be</span>
            <Row question="2">
                {interestList.map((interest) => (
                    <>
                        <StyledRadio
                            type="checkbox"
                            id={interest.value}
                            name={`interests.${interest.value}`}
                            value={interest.value}
                            ref={register}
                            onChange={() => toggleNext(true)}
                        />
                        <StyledLabel htmlFor={interest.value} key={interest.value} interest>
                            {interest.name}
                        </StyledLabel>
                    </>
                ))}
            </Row>
            {showNext && (
                <StyledButton type="button" onClick={() => onNext(3)}>
                    Next
                </StyledButton>
            )}
        </ExtraInfo>
    );
};

export default Question2;
