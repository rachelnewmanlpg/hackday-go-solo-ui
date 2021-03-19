import React from 'react';
import Link from 'next/link';
import { StyledButton } from '../components/profileForm/styles';
import { SignUp } from '../styles/global';

const HomePage = () => (
    <main data-testid="nextjs-index">
        <SignUp>
            <img src="/assets/logo.png" alt="" width="250" align="center" />
            <Link href="/create-profile" passHref>
                <StyledButton data-testid="delivery-view-mapping">SignUp</StyledButton>
            </Link>{' '}
        </SignUp>
    </main>
);

export async function getServerSideProps(ctx) {
    return {
        props: {},
    };
}

export default HomePage;
