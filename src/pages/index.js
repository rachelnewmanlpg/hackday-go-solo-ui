import React from 'react';
import { Header } from '../styles/global';

const HomePage = () => (
    <main data-testid="nextjs-index">
        <Header>
            <img src="/assets/logo.png" alt="" width="100" align="center" />
        </Header>
        <section>
            <h1>Homepage</h1>
        </section>
    </main>
);

export async function getServerSideProps(ctx) {
    return {
        props: {},
    };
}

export default HomePage;
