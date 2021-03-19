import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { MainInfo, StyledButton, StyledInput } from '../components/profileForm/styles';
import { SignUp } from '../styles/global';
import { profileActions } from '../store/ducks/profile';

const HomePage = () => {
    const dispatch = useDispatch();
    const [showLoginInput, toggleLoginInput] = useState(false);
    const [email, setEmail] = useState('');

    const onLogin = () => {
        dispatch(profileActions.getProfile(email));
        Router.push('/profile');
    };
    return (
        <main data-testid="nextjs-index">
            <SignUp>
                <img src="/assets/logo.png" alt="" width="250" align="center" />
                <Link href="/create-profile" passHref>
                    <StyledButton>SignUp</StyledButton>
                </Link>
                <MainInfo>
                    {!showLoginInput && <StyledButton onClick={() => toggleLoginInput(true)}>Log In</StyledButton>}
                    {showLoginInput && (
                        <>
                            <StyledInput value={email} onChange={(e) => setEmail(e.target.value)} />
                            <StyledButton onClick={() => onLogin()}>LogIn</StyledButton>
                        </>
                    )}
                </MainInfo>
            </SignUp>
        </main>
    );
};

export async function getServerSideProps(ctx) {
    return {
        props: {},
    };
}

export default HomePage;
