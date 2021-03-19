/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { ExtraInfo, StyledButton, RadioIcon, StyledRadio, StyledLabel, Row } from './styles';

const Question1 = ({ register, onNext }) => {
    const [showWith, toggleWith] = useState(false);
    const [showNext, toggleNext] = useState(false);
    return (
        <ExtraInfo>
            <h3>Who are you?</h3>
            <Row>
                <StyledLabel htmlFor="MALE">
                    <StyledRadio
                        type="radio"
                        id="MALE"
                        name="gender"
                        value="MALE"
                        ref={register}
                        onChange={() => toggleWith(true)}
                    />
                    <RadioIcon>👨‍💼 </RadioIcon>
                    Male
                </StyledLabel>
                <StyledLabel htmlFor="FEMALE">
                    <StyledRadio
                        type="radio"
                        id="FEMALE"
                        name="gender"
                        value="FEMALE"
                        ref={register}
                        onChange={() => toggleWith(true)}
                    />
                    <RadioIcon>👩‍💼</RadioIcon>
                    Female
                </StyledLabel>
                <StyledLabel htmlFor="NEUTRAL">
                    <StyledRadio
                        type="radio"
                        id="NEUTRAL"
                        name="gender"
                        value="NEUTRAL"
                        ref={register}
                        onChange={() => toggleWith(true)}
                    />
                    <RadioIcon>🧑‍💼</RadioIcon>
                    Neutral
                </StyledLabel>
            </Row>
            {showWith && (
                <>
                    <h3>I want to explore with</h3>
                    <Row>
                        <StyledLabel htmlFor="exploreMale">
                            <StyledRadio
                                type="radio"
                                id="exploreMale"
                                name="exploreWith"
                                value="MALE"
                                ref={register}
                                onChange={() => toggleNext(true)}
                            />
                            <RadioIcon>👨‍💼 </RadioIcon>
                            Male
                        </StyledLabel>
                        <StyledLabel htmlFor="exploreFemale">
                            <StyledRadio
                                type="radio"
                                id="exploreFemale"
                                name="exploreWith"
                                value="FEMALE"
                                ref={register}
                                onChange={() => toggleNext(true)}
                            />
                            <RadioIcon>👩‍💼</RadioIcon>
                            Female
                        </StyledLabel>
                        <StyledLabel htmlFor="either">
                            <StyledRadio
                                type="radio"
                                id="either"
                                name="exploreWith"
                                value="NOT_WORRIED"
                                ref={register}
                                onChange={() => toggleNext(true)}
                            />
                            <RadioIcon>👥</RadioIcon>
                            Not worried
                        </StyledLabel>
                    </Row>
                </>
            )}
            {showNext && (
                <StyledButton type="button" onClick={() => onNext(2)}>
                    Next
                </StyledButton>
            )}
        </ExtraInfo>
    );
};

export default Question1;
