import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Checkbox } from '@pickle/checkbox';
import { useDispatch } from 'react-redux';
import Router from 'next/router';

import { Form, StyledInput, StyledButton, Flex, MainInfo, Show, QuestionRow } from './styles';
import Question1 from './Question1';
import Question2 from './Question2';
import interests from './interests';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import { profileActions } from '../../store/ducks/profile';

const languages = ['French', 'English', 'Spanish', 'Arabic'];
const schemaObject = {
    name: yup.string().ensure().trim().required('Required'),
    email: yup.string().email().required('Required'),
    age: yup.number().integer().positive().required('Required'),
    gender: yup.string().oneOf(['MALE', 'FEMALE', 'NEUTRAL']),
    exploreWith: yup.string().oneOf(['MALE', 'FEMALE', 'NOT_WORRIED']),
    interests: yup.object(),
    languages: yup.object(),
    travelApproach: yup.number().min(0).max(10),
    describeYourself: yup.number().min(0).max(10),
    orderNumber: yup.string(),
    consent: yup.string().oneOf(['yes']).required(),
};
languages.forEach((language) => {
    schemaObject.languages[language] = yup.string();
});

interests.forEach((interest) => {
    schemaObject.interests[interest.value] = yup.string();
});

const ProfileForm = () => {
    const validationSchema = yup.object().shape(schemaObject);
    const [questionNumber, setQuestionNumber] = useState(0);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        errors,
        formState: { isValid },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(validationSchema),
        defaultValues: { travelApproach: 5, introverted: 5 },
    });

    const onSubmit = (data) => {
        const {
            interests: dataInterests,
            languages: dataLanguages,
            exploreWith,
            gender,
            travelApproach,
            describeYourself,
            ...rest
        } = data;
        const checkedInterests = Object.values(dataInterests).filter((interest) => !!interest);
        const checkedLanguages = Object.values(dataLanguages).filter((language) => !!language);
        dispatch(
            profileActions.createProfile({
                ...rest,
                languages: checkedLanguages,
                profileInfo: { interests: checkedInterests, exploreWith, gender, travelApproach, describeYourself },
            })
        );
        Router.push('/profile');
    };
    return (
        <>
            {questionNumber > 0 && (
                <QuestionRow between>
                    <small>{questionNumber} of 7</small>
                    <button type="button" onClick={() => setQuestionNumber(questionNumber + 1)}>
                        <small>skip</small>
                    </button>
                </QuestionRow>
            )}
            <Form onSubmit={handleSubmit(onSubmit)} data-testid="profile-form">
                <Show show={questionNumber === 0}>
                    <MainInfo>
                        <StyledInput
                            name="name"
                            id="name"
                            type="text"
                            ariaLabel="name"
                            error={errors.name}
                            register={register}
                            showErrorMessage={false}
                            aria-invalid={!!errors.name?.message}
                            placeholder="Name"
                        />
                        <StyledInput
                            name="email"
                            id="email"
                            type="text"
                            ariaLabel="email"
                            error={errors.email}
                            showErrorMessage={false}
                            register={register}
                            aria-invalid={!!errors.email?.message}
                            placeholder="Email"
                        />
                        <StyledInput
                            name="age"
                            id="age"
                            type="number"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            ariaLabel="age"
                            error={errors.age}
                            register={register}
                            showErrorMessage={false}
                            aria-invalid={!!errors.age?.message}
                            placeholder="Age"
                        />
                        <h4>Languages</h4>
                        {languages.map((language) => (
                            <Flex key={language}>
                                <Checkbox
                                    name={`languages.${language}`}
                                    id={`languages.${language}`}
                                    error={`errors.languages.${language}`}
                                    register={register}
                                    value={language}
                                    showErrorMessage={false}
                                    aria-invalid={!!`errors.languages.${language}`}
                                />
                                <label htmlFor={`languages.${language}`}>{language}</label>
                            </Flex>
                        ))}
                    </MainInfo>
                    <small>
                        So we can find like minded travellers we need to ask a couple of additional questions to build
                        up your profile
                    </small>
                    <StyledButton type="button" onClick={() => setQuestionNumber(1)}>
                        Build profile
                    </StyledButton>
                </Show>
                <Show show={questionNumber === 1}>
                    <Question1 register={register} onNext={setQuestionNumber} />
                </Show>
                <Show show={questionNumber === 2}>
                    <Question2 register={register} onNext={setQuestionNumber} />
                </Show>
                <Show show={questionNumber === 3}>
                    <Question3 register={register} onNext={setQuestionNumber} />
                </Show>
                <Show show={questionNumber === 4}>
                    <Question4 register={register} onNext={setQuestionNumber} />
                </Show>
                <Show show={questionNumber === 5}>
                    <Question5 register={register} onNext={setQuestionNumber} />
                </Show>
            </Form>
        </>
    );
};

export default ProfileForm;
